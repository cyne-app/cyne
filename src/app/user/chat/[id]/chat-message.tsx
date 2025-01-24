'use client';

import Image from 'next/image';
import { Message } from 'ai';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn(
      'flex w-full items-start gap-4 p-4',
      isUser ? 'bg-primary/5' : 'bg-muted/50'
    )}>
      <div className={cn(
        'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full',
        isUser ? 'bg-primary/10' : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px]'
      )}>
        {isUser ? (
          <User className="h-4 w-4 text-primary" />
        ) : (
          <div className="relative h-8 w-8">
            <Image
              src="/elyx.svg"
              alt="ELYX AI"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        )}
      </div>
      <div className="flex-1 space-y-1">
        <p className="leading-relaxed">
          {message.content}
        </p>
      </div>
    </div>
  );
} 