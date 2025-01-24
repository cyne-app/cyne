'use client';

import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ConversationInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export function ConversationInput({
  value,
  onChange,
  onSubmit,
  className,
  placeholder = "Type your message...",
}: ConversationInputProps) {
  const [isComposing, setIsComposing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || isComposing) return;
    onSubmit(value);
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!value?.trim()) return;
        onSubmit(value);
      }}
      className={cn(
        "relative flex w-full items-center",
        className
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-xl px-4 py-3 pr-12",
          "bg-zinc-800/50 border border-zinc-700/50",
          "text-white placeholder:text-zinc-500",
          "focus:outline-none focus:ring-2 focus:ring-[#FF4D4D]/50 focus:border-[#FF4D4D]",
          "transition-all duration-200"
        )}
      />
    </form>
  );
} 