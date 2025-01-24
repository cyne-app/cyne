'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import { useChat } from 'ai/react';
import { RiTwitterXFill, RiTelegramFill, RiGithubFill, RiDiscordFill, RiBookOpenLine } from '@remixicon/react';
import { Home, Wallet, LineChart, Shield, FileText, Droplets, ArrowLeftRight, BarChart2, AlertTriangle, PieChart, Briefcase, CoinsIcon, Lock, Menu, X, ArrowRight } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

import ChatInterface from '@/app/(user)/chat/[id]/chat-interface';
import { AiParticlesBackground } from '@/components/ui/ai-particles-background';
import BlurFade from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import TypingAnimation from '@/components/ui/typing-animation';
import { cn } from '@/lib/utils';

import { ConversationInput } from '@/components/home/conversation-input';
import { getRandomSuggestions, Suggestion } from '@/components/home/data/suggestions';
import { SuggestionCard } from '@/components/home/suggestion-card';
import { useLogin } from '@privy-io/react-auth';
import { TopBar } from '@/components/layout/top-bar';

interface SectionTitleProps {
  children: React.ReactNode;
  locked?: boolean;
}

interface SidebarButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  active?: boolean;
  locked?: boolean;
}

function SidebarButton({ icon, label, onClick, active, locked }: SidebarButtonProps) {
  const { login } = useLogin({
    onComplete: (user, isNewUser) => {
      // Just connect wallet without navigation
    },
  });

  if (locked) {
    return (
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 px-4 text-muted-foreground hover:bg-gray-50 dark:hover:bg-gray-900",
          active && "bg-gray-50 dark:bg-gray-900"
        )}
        onClick={login}
      >
        <span className="flex w-full items-center gap-2">
          {icon}
          <span>{label}</span>
          <Lock className="ml-auto h-4 w-4" />
        </span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2 px-4 text-foreground hover:bg-gray-50 dark:hover:bg-gray-900",
        active && "bg-gray-50 dark:bg-gray-900"
      )}
      onClick={onClick}
    >
      <span className="flex w-full items-center gap-2">
        {icon}
        <span>{label}</span>
      </span>
    </Button>
  );
}

function Sidebar({ isOpen }: { isOpen: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  
  let { login } = useLogin({
    onComplete: (user, isNewUser) => {
      // Just connect wallet without navigation
    },
  });

  if (isMaintenanceMode) {
    login = () => {
      window.location.href = 'https://x.com/cyne_ai';
    };
  }

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-40 flex h-full w-64 flex-col border-r bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-transform duration-300",
      "md:relative md:translate-x-0",
      !isOpen && "-translate-x-full md:translate-x-0"
    )}>
      <div className="flex h-16 items-center border-b px-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
            <span className="text-white dark:text-black text-xl font-bold">C</span>
          </div>
          <span className="text-xl font-bold">
            CYNE AI
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-3">
        <div className="space-y-6 px-3">
          {/* Main Actions */}
          <div className="space-y-2">
            <Link href="https://cyne.ai/" passHref>
              <SidebarButton 
                icon={<Home className="h-4 w-4" />} 
                label="Home" 
                active={pathname === '/'}
              />
            </Link>
            <SidebarButton 
              icon={<Wallet className="h-4 w-4" />} 
              label="Connect Wallet"
              onClick={login}
            />
          </div>

          {/* Trading Agents */}
          <div className="space-y-2">
            <SectionTitle>Trading Agents</SectionTitle>
            <div className="space-y-1">
              <SidebarButton 
                icon={<LineChart className="h-4 w-4" />}
                label="Whale Tracker"
                locked
              />
              <SidebarButton 
                icon={<Shield className="h-4 w-4" />} 
                label="Rug Checker"
                locked
              />
              <SidebarButton 
                icon={<Droplets className="h-4 w-4" />}
                label="Liquidity Manager"
                locked
              />
              <SidebarButton 
                icon={<ArrowLeftRight className="h-4 w-4" />}
                label="DEX Aggregator"
                locked
              />
            </div>
          </div>

          {/* Analysis Agents */}
          <div className="space-y-2">
            <SectionTitle>Analysis Agents</SectionTitle>
            <div className="space-y-1">
              <SidebarButton 
                icon={<BarChart2 className="h-4 w-4" />}
                label="Sentiment Analyzer"
                locked
              />
              <SidebarButton 
                icon={<AlertTriangle className="h-4 w-4" />}
                label="Risk Analyzer"
                locked
              />
              <SidebarButton 
                icon={<PieChart className="h-4 w-4" />}
                label="Performance Reporter"
                locked
              />
            </div>
          </div>

          {/* Portfolio Agents */}
          <div className="space-y-2">
            <SectionTitle>Portfolio Agents</SectionTitle>
            <div className="space-y-1">
              <SidebarButton 
                icon={<Briefcase className="h-4 w-4" />}
                label="Portfolio Manager"
                locked
              />
              <SidebarButton 
                icon={<CoinsIcon className="h-4 w-4" />}
                label="Staking Agent"
                locked
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t p-4">
        <div className="flex items-center justify-between px-2">
          <Link
            href="https://x.com/cyne_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <RiTwitterXFill className="h-5 w-5 text-muted-foreground group-hover:text-black dark:group-hover:text-white" />
          </Link>
          <Link
            href="https://t.me/cyne_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <RiTelegramFill className="h-5 w-5 text-muted-foreground group-hover:text-black dark:group-hover:text-white" />
          </Link>
          <Link
            href="https://discord.gg/cyne_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <RiDiscordFill className="h-5 w-5 text-muted-foreground group-hover:text-black dark:group-hover:text-white" />
          </Link>
          <Link
            href="https://docs.cyne.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <RiBookOpenLine className="h-5 w-5 text-muted-foreground group-hover:text-black dark:group-hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children, locked }: SectionTitleProps & { locked?: boolean }) {
  return (
    <div className="flex items-center justify-between px-4 text-xs font-semibold uppercase tracking-wider text-foreground/70">
      <span>{children}</span>
      {locked && <Lock className="h-3 w-3 text-foreground/70" />}
    </div>
  );
}

export default function HomePage() {
  const pathname = usePathname();
  const router = useRouter();
  const suggestions = useMemo(() => getRandomSuggestions(6), []);
  const [showChat, setShowChat] = useState(false);
  const [chatId, setChatId] = useState(() => uuidv4());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const resetChat = useCallback(() => {
    setShowChat(false);
    setChatId(uuidv4());
  }, []);

  const { messages, input, handleSubmit, setInput } = useChat({
    id: chatId,
    initialMessages: [],
    body: { id: chatId },
  });

  const handleSend = async (value: string | undefined) => {
    if (!value?.trim()) return;

    const fakeEvent = new Event('submit') as any;
    fakeEvent.preventDefault = () => {};

    await handleSubmit(fakeEvent, { data: { content: value } });
    setShowChat(true);
    window.history.replaceState(null, '', `/chat/${chatId}`);
  };

  // Reset chat when pathname changes to /home
  useEffect(() => {
    if (pathname === '/') {
      resetChat();
    }
  }, [pathname, resetChat]);

  // Listen for browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      if (location.pathname === '/') {
        resetChat();
      } else if (location.pathname === `/chat/${chatId}`) {
        setShowChat(true);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [chatId, resetChat]);

  const mainContent = (
    <div className="flex flex-col items-center justify-center min-h-screen pt-16 bg-[#0B0F17]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative w-full max-w-4xl space-y-12 px-6">
        {/* Token Launch Banner */}
        <BlurFade delay={0.1}>
          <Link 
            href="#"
            className="mx-auto flex w-fit items-center gap-2 rounded-full bg-zinc-800/50 px-4 py-1 backdrop-blur-sm hover:bg-zinc-800/70 transition-colors"
          >
            <span className="flex items-center gap-2 text-sm text-zinc-400">
              🚀 $CYNE Token Launch
            </span>
            <span className="text-sm text-white">Get it on Jupiter now →</span>
          </Link>
        </BlurFade>

        {/* Title Section */}
        <BlurFade delay={0.2}>
          <div className="space-y-6 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              AI-Powered
              <br />
              <span className="bg-gradient-to-r from-[#FF4D4D] to-[#FF8A8A] bg-clip-text text-transparent">
                Solana Intelligence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400">
              Make smarter trading decisions
              <br />
              powered by advanced AI analytics
            </p>
          </div>
        </BlurFade>

        {/* Input Section */}
        <BlurFade delay={0.3}>
          <div className="relative mt-12">
            <ConversationInput
              value={input}
              onChange={setInput}
              onSubmit={handleSend}
              className="w-full text-lg bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-500 rounded-xl focus:ring-[#FF4D4D] focus:border-[#FF4D4D]"
              placeholder="Ask anything about Solana..."
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
              <Button 
                size="icon"
                className="rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#FF8A8A] text-white hover:opacity-90"
                onClick={() => input && handleSend(input)}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </BlurFade>

        {/* Suggestions Section */}
        <BlurFade delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestions.map((suggestion: Suggestion, index: number) => (
              <button
                key={suggestion.title}
                className="group relative overflow-hidden rounded-xl bg-[#0F1318] border border-zinc-800 p-4 hover:border-[#FF4D4D]/50 transition-all duration-300 text-left w-full cursor-pointer"
                onClick={() => {
                  setInput(suggestion.title);
                  // Don't auto-send, just set the input
                  const inputElement = document.querySelector('input[type="text"]');
                  if (inputElement instanceof HTMLInputElement) {
                    inputElement.focus();
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-white group-hover:text-[#FF4D4D] transition-colors duration-300">
                      {suggestion.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1">
                      {suggestion.subtitle}
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-8 h-8 rounded-lg bg-[#FF4D4D]/10 flex items-center justify-center group-hover:bg-[#FF4D4D]/20 transition-colors duration-300">
                      <ArrowRight className="h-4 w-4 text-[#FF4D4D]" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  );

  return (
    <>
      <TopBar />
      <main className="min-h-screen">
        <div
          className={cn(
            'transition-opacity duration-300',
            showChat ? 'pointer-events-none opacity-0' : 'opacity-100',
          )}
        >
          {mainContent}
        </div>

        <div
          className={cn(
            'fixed inset-0 transition-opacity duration-300 pt-16',
            showChat ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <ChatInterface id={chatId} initialMessages={messages} />
        </div>
      </main>
    </>
  );
}
