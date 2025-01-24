export interface Suggestion {
  id: string;
  title: string;
  subtitle: string;
  prompt: string;
}

export const SUGGESTIONS: Suggestion[] = [

  {
    id: 'Volume-leaders-sol',
    title: 'Volume leaders on Solana',
    subtitle: 'find the top volume leaders on Solana',
    prompt: 'Show me the volume leaders on Solana'
  },
  {
    id: 'solana-trends',
    title: "What's trending on Solana?",
    subtitle: 'find the current market trends',
    prompt: "What's trending on Solana right now?"
  },
  {
    id: 'price-feed',
    title: "What's the price of SOL?",
    subtitle: 'find the current price of SOL',
    prompt: "What's the current price of SOL?"
  },
  {
    id: 'top-gainers-last-24h',
    title: 'Top gainers in the last 24h',
    subtitle: 'find the top gainers in the last 24 hours',
    prompt: 'Show me the top gainers in the last 24 hours on Solana'
  },
  {
    id: 'launch-token',
    title: 'Launch a new token',
    subtitle: 'deploy a new token on pump.fun',
    prompt: 'How can I launch a new token on Solana?'
  },
  {
    id: 'Memecoin-Solana-scan',
    title: 'Find new memecoins on Solana',
    subtitle: 'Find memecoins on Solana with high volume',
    prompt: 'Show me new trending memecoins on Solana with high volume'
  },
  // {
  //   id: 'sell-everything-buy-cyne',
  //   title: 'Sell everything and buy $cyne',
  //   subtitle: 'swap all your tokens for $cyne',
  // },
  // {
  //   id: 'phantom-updates',
  //   title: 'Any updates from @phantom recently?',
  //   subtitle: 'summarize the latest tweets from @phantom',
  // },
  // {
  //     id: "toly-updates",
  //     title: "What has toly been doing recently?",
  //     subtitle: "summarize his recent tweets"
  // },
];

export function getRandomSuggestions(count: number): Suggestion[] {
  const shuffled = [...SUGGESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
