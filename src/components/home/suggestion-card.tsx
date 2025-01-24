'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Suggestion } from './data/suggestions';

interface SuggestionCardProps extends Suggestion {
  delay: number;
  onSelect: (value: string) => void;
}

export function SuggestionCard({ id, title, subtitle, delay, onSelect }: SuggestionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      onClick={() => onSelect(title)}
      className={cn(
        "group w-full rounded-lg border p-4 text-left transition-all duration-300",
        "hover:border-blue-500/50 hover:bg-blue-500/5",
        "focus:outline-none focus:ring-2 focus:ring-blue-500"
      )}
    >
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </motion.button>
  );
} 