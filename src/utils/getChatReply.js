import { FALLBACK_MESSAGE } from "../data/chatKnowledge";

const tokenize = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2);

const scoreEntry = (messageTokens, entry) => {
  let score = 0;

  messageTokens.forEach((token) => {
    if (entry.keywords.some((keyword) => keyword.includes(token) || token.includes(keyword))) {
      score += 2;
    }
    if (entry.question.toLowerCase().includes(token)) {
      score += 1;
    }
  });

  return score;
};

export const getChatReply = (message, entries) => {
  const trimmed = message.trim();
  if (!trimmed) {
    return "Please type a question about DigiTools products, pricing, or FAQs.";
  }

  const messageTokens = tokenize(trimmed);
  if (!messageTokens.length) {
    return FALLBACK_MESSAGE;
  }

  let best = null;
  let bestScore = 0;

  entries.forEach((entry) => {
    const score = scoreEntry(messageTokens, entry);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  });

  if (!best || bestScore < 2) {
    return FALLBACK_MESSAGE;
  }

  return best.answer;
};
