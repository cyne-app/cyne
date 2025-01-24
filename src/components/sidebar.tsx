'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLogin, usePrivy } from '@privy-io/react-auth';
import { RiTwitterXFill, RiTelegramFill, RiGithubFill, RiDiscordFill } from '@remixicon/react';
import { 
  Home, 
  User, 
  Wallet, 
  LineChart, 
  Shield, 
  FileText, 
  Droplets, 
  ArrowLeftRight, 
  BarChart2, 
  AlertTriangle, 
  PieChart, 
  Briefcase, 
  CoinsIcon 
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  active?: boolean;
}

function SidebarButton({ icon, label, onClick, active }: SidebarButtonProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        'group relative w-full flex items-center gap-3 px-3 py-2 h-10',
        'rounded-lg text-sm font-medium transition-all duration-200',
        'dark:hover:bg-gradient-to-r dark:hover:from-blue-500/20 dark:hover:to-purple-500/20',
        'hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100',
        active ? [
          'dark:text-white text-gray-900',
          'dark:bg-gradient-to-r dark:from-blue-500/20 dark:to-purple-500/20',
          'bg-gradient-to-r from-blue-50 to-purple-50'
        ] : 'dark:text-neutral-400 text-gray-600',
        'before:absolute before:left-0 before:w-[3px] before:h-full before:rounded-full',
        'before:transition-all before:duration-200',
        active ? 'before:bg-gradient-to-b before:from-blue-500 before:to-purple-500' : 'before:opacity-0',
        'hover:before:opacity-100',
        'dark:hover:text-white hover:text-gray-900'
      )}
      onClick={onClick}
    >
      <span className="relative z-10">{icon}</span>
      <span className="relative z-10">{label}</span>
      {active && (
        <div className="absolute right-3 h-1.5 w-1.5 rounded-full bg-blue-500" />
      )}
    </Button>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  const { authenticated } = usePrivy();
  
  const { login: privyLogin } = useLogin({
    onComplete: (user, isNewUser) => {
      // Just connect wallet without navigation
    },
  });

  const login = isMaintenanceMode 
    ? () => { window.location.href = 'https://x.com/ElyxAI'; }
    : privyLogin;

  const handleAccountClick = () => {
    if (authenticated) {
      router.push('/account');
    } else {
      login();
    }
  };

  return (
    <div className={cn(
      "flex h-full w-[280px] flex-col",
      "bg-white dark:bg-gradient-to-b dark:from-black/80 dark:via-black/50 dark:to-black/80",
      "border-r border-gray-200 dark:border-white/[0.02]",
      "backdrop-blur-2xl"
    )}>
      {/* Logo Section */}
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center gap-3">
          <div className="group relative flex h-10 w-10 items-center justify-center">
            <div className={cn(
              "absolute inset-0 rounded-2xl transition-all duration-300 group-hover:blur-md",
              "bg-gradient-to-br from-blue-600 to-purple-600 dark:opacity-100 opacity-80"
            )} />
            <div className="absolute inset-[1px] rounded-2xl bg-white dark:bg-black/90" />
            <span className="relative text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              E
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              ELYX
            </span>
            <div className={cn(
              "ml-2 flex items-center rounded-full px-2.5 py-1",
              "bg-gradient-to-r from-gray-100 to-gray-100 dark:from-blue-500/10 dark:to-purple-500/10"
            )}>
              <span className="text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Section */}
      <div className="mt-2 flex-1 space-y-1 px-3">
        <div className="mb-4 px-3 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
          Navigation
        </div>
        <SidebarButton 
          icon={<Home className="h-[18px] w-[18px] stroke-[1.5]" />} 
          label="Home" 
          active={pathname === '/'}
          onClick={() => router.push('/')}
        />
        <SidebarButton 
          icon={<User className="h-[18px] w-[18px] stroke-[1.5]" />} 
          label="My Account" 
          active={pathname === '/account'}
          onClick={handleAccountClick}
        />
        <SidebarButton 
          icon={<Wallet className="h-[18px] w-[18px] stroke-[1.5]" />} 
          label="Connect Wallet"
          onClick={login}
        />
      </div>
      
      {/* Social Links */}
      <div className="p-6">
        <div className={cn(
          "rounded-2xl p-4",
          "bg-gray-50 dark:bg-gradient-to-r dark:from-blue-500/10 dark:to-purple-500/10"
        )}>
          <div className="flex items-center justify-between">
            <Link
              href="https://x.com/ElyxAI"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex h-10 w-10 items-center justify-center rounded-xl",
                "bg-white/80 dark:bg-black/20",
                "transition-all duration-200",
                "hover:bg-gray-100 dark:hover:bg-black/40"
              )}
            >
              <RiTwitterXFill className="h-5 w-5 text-gray-600 dark:text-neutral-400 transition-colors group-hover:text-gray-900 dark:group-hover:text-white" />
            </Link>
            <Link
              href="https://discord.gg/cyne"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex h-10 w-10 items-center justify-center rounded-xl",
                "bg-white/80 dark:bg-black/20",
                "transition-all duration-200",
                "hover:bg-gray-100 dark:hover:bg-black/40"
              )}
            >
              <RiDiscordFill className="h-5 w-5 text-gray-600 dark:text-neutral-400 transition-colors group-hover:text-gray-900 dark:group-hover:text-white" />
            </Link>
            <Link
              href="https://t.me/ElyxAI"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex h-10 w-10 items-center justify-center rounded-xl",
                "bg-white/80 dark:bg-black/20",
                "transition-all duration-200",
                "hover:bg-gray-100 dark:hover:bg-black/40"
              )}
            >
              <RiTelegramFill className="h-5 w-5 text-gray-600 dark:text-neutral-400 transition-colors group-hover:text-gray-900 dark:group-hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 