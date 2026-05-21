const SYSTEM_PROMPT = `You are the DigiTools support assistant on digitools.com.
Answer only about DigiTools products, pricing plans, cart/checkout, licensing, and FAQs.
Be concise and friendly. Do not invent prices or features.
If unsure, suggest browsing Products (#products) or Pricing (#pricing).`;

const callGroq = async (message, context) => {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.AI_MODEL || "llama-3.1-8b-instant";

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.4,
      messages: [
        { role: "system", content: `${SYSTEM_PROMPT}\n\nSite context:\n${context || ""}` },
        { role: "user", content: message.trim() },
      ],
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail || "Groq request failed");
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim();
};

const callGemini = async (message, context) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.AI_MODEL || "gemini-1.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: `${SYSTEM_PROMPT}\n\nSite context:\n${context || ""}` }],
      },
      contents: [{ role: "user", parts: [{ text: message.trim() }] }],
      generationConfig: { temperature: 0.4 },
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail || "Gemini request failed");
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
};

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const hasGroq = Boolean(process.env.GROQ_API_KEY);
  const hasGemini = Boolean(process.env.GEMINI_API_KEY);

  if (!hasGroq && !hasGemini) {
    return res.status(503).json({ error: "AI API key not configured" });
  }

  const { message, context } = req.body || {};
  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    let reply = null;

    if (hasGroq) {
      reply = await callGroq(message, context);
    } else if (hasGemini) {
      reply = await callGemini(message, context);
    }

    if (!reply) {
      return res.status(502).json({ error: "Empty AI response" });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({ error: "AI service unavailable" });
  }
};
