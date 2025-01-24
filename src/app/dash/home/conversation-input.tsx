'use client';

import { useState } from 'react';

import { SendHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ConversationInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  className?: string;
}

export function ConversationInput({
  value,
  onChange,
  onSubmit,
  className,
}: ConversationInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'group relative transition-all duration-300',
        className
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden rounded-xl border bg-background/30 backdrop-blur-xl transition-all duration-300',
          'before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300',
          'before:bg-gradient-to-r before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10',
          isFocused && [
            'border-blue-500/50',
            'shadow-[0_0_20px_rgba(59,130,246,0.15)]',
            'before:opacity-100'
          ],
          !isFocused && 'border-white/10 hover:border-white/20'
        )}
      >
        <div className="relative flex items-start p-4">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Ask me anything about Solana..."
            rows={4}
            className={cn(
              'min-h-[110px] w-full resize-none bg-transparent pr-12',
              'placeholder:text-muted-foreground/50',
              'focus:outline-none'
            )}
          />
          <Button
            type="submit"
            size="icon"
            className={cn(
              'absolute right-4 top-4 h-8 w-8 rounded-lg transition-all duration-300',
              'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600',
              'text-white shadow-lg',
              !value.trim() && 'opacity-50 cursor-not-allowed'
            )}
            disabled={!value.trim()}
          >
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
}
