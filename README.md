# 🎯 DigiTools Platform

Welcome to the **DigiTools Platform**, a premium digital tools buying website designed to supercharge your workflow. This platform allows users to browse an exclusive collection of digital assets, software, and templates, all presented within a beautiful, modern, and highly responsive user interface based on a custom Figma design system.

## ⚙️ Technologies Used

- **React.js**: For building a dynamic, component-based user interface.
- **Tailwind CSS & DaisyUI**: For rapid styling, custom gradients, hover effects, and fully responsive layouts.
- **JavaScript (ES6+)**: For core application logic and state management.
- **React-Toastify**: For elegant, real-time alert notifications.
- **Free AI chat** (Groq/Gemini): Bottom-right assistant for products, pricing, and FAQs.
- **Figma**: For the foundational design architecture and image assets.

## ✨ Top 3 Features

1. **Dynamic Shopping Cart System**  
   Seamlessly switch between browsing products and viewing your cart. Add, remove, and manage your selected digital tools with real-time total calculation and dynamic navbar badge updates.

2. **Pixel-Perfect Figma Integration & Animations**  
   The platform features a premium aesthetic strictly adhering to custom Figma designs. It includes tailored gradient text, high-quality custom illustrations, smooth interactive hover animations across all cards, and a polished, responsive section layout.

3. **Interactive Notifications & Smart State Updates**  
   Using React-Toastify, every action—from adding a product to the cart, removing an item, to proceeding to checkout—is accompanied by a beautiful pop-up notification. The UI instantly responds, changing button states to "Added to Cart" to ensure a flawless user experience.

---

## 💬 Free AI chat

Click the **chat icon** (bottom-right) to ask about products, pricing, or FAQs.

- Works immediately with built-in answers (no API key).
- For smarter AI: add a **free** `GROQ_API_KEY` or `GEMINI_API_KEY` on Vercel ($0 on free tiers).

Setup guide: [docs/chatbot-setup.md](docs/chatbot-setup.md)

---

## 🚀 Deploy to Vercel

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new).
2. Build command: `npm run build` · Output directory: `build` (also defined in [`vercel.json`](vercel.json)).
3. Optional: add `GROQ_API_KEY` in environment variables for free LLM replies (see [docs/chatbot-setup.md](docs/chatbot-setup.md)).

```bash
npx vercel login
npx vercel --prod
```

---

## 📤 Project Links

- **GitHub Repository Link**: [https://github.com/sohagabir112/DigiTools-Platform](https://github.com/sohagabir112/DigiTools-Platform)
- **Live Site Link**: [https://digi-tools-platform-amber.vercel.app](https://digi-tools-platform-amber.vercel.app)
