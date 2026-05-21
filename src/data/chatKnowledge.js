export const BRAND_INTRO =
  "DigiTools sells digital kits, templates, and productivity tools. Browse products, add items to your cart, and check out on the site.";

export const PLANS = [
  {
    name: "Starter",
    price: "$29/month",
    text: "For solo makers and freelancers.",
    features: ["3 product kits", "Email support", "Community access"],
  },
  {
    name: "Growth",
    price: "$79/month",
    text: "For small teams building fast.",
    features: ["All product kits", "Priority support", "Team workspace"],
    highlight: true,
  },
  {
    name: "Scale",
    price: "$149/month",
    text: "For orgs shipping multiple products.",
    features: ["Unlimited projects", "Dedicated success", "Custom onboarding"],
  },
];

export const FAQS = [
  {
    q: "Do I get updates after purchase?",
    a: "Yes. All kits include future updates and new templates.",
  },
  {
    q: "Can I use the assets for client work?",
    a: "Absolutely. Every plan includes commercial usage rights.",
  },
  {
    q: "Is there team access?",
    a: "Growth and Scale plans include shared workspaces and roles.",
  },
];

export const formatProductEntry = (product) => ({
  id: product.id,
  keywords: [
    product.name,
    product.id,
    ...(product.features || []),
    product.period,
    product.tag,
  ].map((k) => String(k).toLowerCase()),
  question: `Tell me about ${product.name}`,
  answer: `${product.name} — $${product.price} (${product.period}). ${product.description} Features: ${(product.features || []).join(", ")}.`,
});

export const buildKnowledgeEntries = (products = []) => {
  const entries = [
    {
      id: "brand",
      keywords: ["digitools", "what is", "about", "who are you", "help", "hello", "hi"],
      question: "What is DigiTools?",
      answer: BRAND_INTRO,
    },
    {
      id: "cart",
      keywords: ["cart", "checkout", "buy", "purchase", "order"],
      question: "How do I buy?",
      answer:
        "Open the Products section, click Buy Now on a tool, then use the cart icon in the navbar to review items and complete checkout.",
    },
    ...FAQS.map((item, index) => ({
      id: `faq-${index}`,
      keywords: item.q.toLowerCase().split(/\W+/).filter((w) => w.length > 3),
      question: item.q,
      answer: item.a,
    })),
    ...PLANS.map((plan) => ({
      id: `plan-${plan.name}`,
      keywords: [plan.name, "plan", "pricing", "subscription", "monthly"].map((k) => k.toLowerCase()),
      question: `${plan.name} plan`,
      answer: `${plan.name} — ${plan.price}. ${plan.text} Includes: ${plan.features.join(", ")}.`,
    })),
    ...products.map(formatProductEntry),
  ];

  return entries;
};

export const WELCOME_MESSAGE =
  "Hi! I'm the DigiTools assistant. Ask about products, pricing, plans, or how to use the site.";

export const FALLBACK_MESSAGE =
  "I'm not sure about that. Try asking about a product name, pricing plans, or check the FAQ section (#faq).";
