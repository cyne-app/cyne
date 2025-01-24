import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Re-export with new names
export {
  formatTokenAmount,
  formatTokenDecimals,
  formatTokenBalance,
  formatChainAddress,
} from './format'

export {
  formatTransactionDate,
  formatTransactionTime,
  formatTransactionDateTime,
  formatTimeSince,
} from './date'

export * from './validation' 