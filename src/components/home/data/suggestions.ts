export interface Suggestion {
  id: string;
  title: string;
  subtitle: string;
}

export const SUGGESTIONS: Suggestion[] = [
  {
    id: 'Volume-leaders-sol',
    title: 'Volume leaders on Solana',
    subtitle: 'find the top volume leaders on Solana',
  },
  {
    id: 'solana-trends',
    title: "What's trending on Solana?",
    subtitle: 'find the current market trends',
  },
  {
    id: 'price-feed',
    title: "What's the price of SOL?",
    subtitle: 'find the current price of SOL',
  },
  {
    id: 'top-gainers-last-24h',
    title: 'Top gainers in the last 24h',
    subtitle: 'find the top gainers in the last 24 hours',
  },
  {
    id: 'launch-token',
    title: 'Launch a new token',
    subtitle: 'deploy a new token on pump.fun',
  },
  {
    id: 'Memecoin-Solana-scan',
    title: 'Find new memecoins on Solana',
    subtitle: 'Find new memecoins on Solana with high trading volume',
  },
];

export function getRandomSuggestions(count: number): Suggestion[] {
  return [...SUGGESTIONS]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(count, SUGGESTIONS.length));
}