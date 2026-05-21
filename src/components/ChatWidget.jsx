import { useEffect, useMemo, useRef, useState } from "react";
import {
  BRAND_INTRO,
  PLANS,
  FAQS,
  WELCOME_MESSAGE,
  buildKnowledgeEntries,
} from "../data/chatKnowledge";
import { getChatReply } from "../utils/getChatReply";

const API_HINT =
  "Tip: Add a free GROQ_API_KEY on Vercel for smarter AI answers (console.groq.com).";

const buildContext = (products) => {
  const productLines = products
    .map((p) => `- ${p.name}: $${p.price} (${p.period}) — ${p.description}`)
    .join("\n");
  const planLines = PLANS.map((p) => `- ${p.name}: ${p.price}`).join("\n");
  const faqLines = FAQS.map((f) => `- Q: ${f.q} A: ${f.a}`).join("\n");

  return `${BRAND_INTRO}\n\nProducts:\n${productLines}\n\nPlans:\n${planLines}\n\nFAQ:\n${faqLines}`;
};

const ChatMessage = ({ role, text }) => (
  <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
        role === "user"
          ? "bg-indigo-600 text-white"
          : "border border-slate-200 bg-white text-slate-700"
      }`}
    >
      {text}
    </div>
  </div>
);

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showApiHint, setShowApiHint] = useState(false);
  const [products, setProducts] = useState([]);
  const [messages, setMessages] = useState([
    { id: "welcome", role: "assistant", text: WELCOME_MESSAGE },
  ]);
  const listRef = useRef(null);
  const apiHintShown = useRef(false);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .catch(() => setProducts([]));
  }, []);

  const knowledgeEntries = useMemo(
    () => buildKnowledgeEntries(products),
    [products]
  );

  const context = useMemo(() => buildContext(products), [products]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isTyping, showApiHint]);

  const replyWithAi = async (userMessage) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, context }),
      });

      if (response.status === 503 && !apiHintShown.current) {
        apiHintShown.current = true;
        setShowApiHint(true);
      }

      if (response.ok) {
        const data = await response.json();
        if (data.reply) return data.reply;
      }
    } catch {
      // Fall back to local knowledge when API is unavailable (e.g. npm start).
    }

    return getChatReply(userMessage, knowledgeEntries);
  };

  const handleSend = async (event) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMessage = { id: `user-${Date.now()}`, role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    const replyText = await replyWithAi(trimmed);
    setMessages((prev) => [
      ...prev,
      { id: `bot-${Date.now()}`, role: "assistant", text: replyText },
    ]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          className="flex w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
          role="dialog"
          aria-label="DigiTools AI chat"
        >
          <div className="flex items-center justify-between gradient-halves px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">DigiTools Assistant</p>
              <p className="text-xs text-indigo-100">Ask about products & pricing</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white/20 px-2 py-1 text-xs hover:bg-white/30"
              aria-label="Close chat"
            >
              Close
            </button>
          </div>

          <div ref={listRef} className="flex max-h-80 flex-col gap-3 overflow-y-auto bg-slate-50 px-4 py-4">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} role={msg.role} text={msg.text} />
            ))}
            {showApiHint && (
              <p className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
                {API_HINT}
              </p>
            )}
            {isTyping && (
              <div className="text-xs text-slate-500" aria-live="polite">
                Assistant is typing…
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="border-t border-slate-200 bg-white p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about a product or plan…"
                className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                aria-label="Chat message"
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="btn-gradient px-4 py-2 text-xs disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-shadow hover:shadow-xl"
        aria-label={isOpen ? "Close chat" : "Open AI chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <span className="text-xl leading-none text-slate-600">×</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
