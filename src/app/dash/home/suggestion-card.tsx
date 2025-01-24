import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import BlurFade from '@/components/ui/blur-fade';

import type { Suggestion } from './data/suggestions';

interface SuggestionCardProps extends Suggestion {
  delay?: number;
  onSelect: (text: string) => void;
}

export function SuggestionCard({
  title,
  subtitle,
  onSelect,
  delay,
}: SuggestionCardProps) {
  return (
    <BlurFade delay={delay}>
      <button
        onClick={() => onSelect(subtitle || title)}
        className={cn(
          "w-full p-4 rounded-xl border text-left transition-all duration-300",
          "bg-background/30 backdrop-blur-sm",
          "hover:border-transparent hover:shadow-lg",
          "relative group overflow-hidden",
          // Gradient border effect on hover
          "before:absolute before:inset-0 before:rounded-xl before:p-[1px]",
          "before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500",
          "before:opacity-0 before:transition-opacity before:duration-300",
          "hover:before:opacity-100",
          // Gradient background effect on hover
          "after:absolute after:inset-[1px] after:rounded-[10px] after:transition-opacity after:duration-300",
          "after:bg-gradient-to-r after:from-blue-500/10 after:via-purple-500/10 after:to-pink-500/10",
          "after:opacity-0 hover:after:opacity-100"
        )}
      >
        <div className="relative z-10 space-y-1">
          <h3 className="font-medium text-sm text-foreground/90 group-hover:text-foreground">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground/70 group-hover:text-foreground/60">
              {subtitle}
            </p>
          )}
        </div>
      </button>
    </BlurFade>
  );
}
