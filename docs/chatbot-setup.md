# Free AI chat setup

The site includes a **bottom-right chat icon**. Click it to ask about products, pricing, and FAQs.

## How it works

- **Without an API key:** answers use built-in site data (products, plans, FAQ).
- **With a free API key:** replies use Groq or Google Gemini ($0 on free tiers).

## Enable free LLM (recommended, ~5 minutes)

### Option A — Groq (recommended)

1. Sign up at [console.groq.com](https://console.groq.com).
2. Create an **API key** (free tier).
3. Add to Vercel: **Project → Settings → Environment Variables**
   - Name: `GROQ_API_KEY`
   - Value: your key
4. **Redeploy** the project.

### Option B — Google Gemini

1. Get a key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey).
2. On Vercel, set `GEMINI_API_KEY` (not `GROQ_API_KEY`).
3. Redeploy.

Use only one provider at a time unless you prefer Groq (it is checked first).

## Local development

1. Copy [`.env.example`](../.env.example) to `.env` and paste your `GROQ_API_KEY`.
2. Run the API locally:
   ```bash
   npx vercel dev
   ```
   (`npm start` alone does not run `/api/chat`.)

## Test questions

- "What is Design Sprint Kit price?" → $49 one-time
- "Can I use assets for client work?" → commercial usage yes
- "What is the Growth plan?" → $79/month

## Live site

https://digi-tools-platform-amber.vercel.app

Site knowledge for the assistant lives in [`src/data/chatKnowledge.js`](../src/data/chatKnowledge.js).
