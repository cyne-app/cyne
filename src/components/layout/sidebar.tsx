'use client'

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useLogin } from '@privy-io/react-auth';
import { 
  Home, 
  Wallet, 
  LineChart, 
  Shield, 
  Droplets, 
  ArrowLeftRight, 
  BarChart2, 
  AlertTriangle, 
  PieChart, 
  Briefcase, 
  Coins as CoinsIcon,
  Lock
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useSidebar } from '@/contexts/sidebar-context';
import { cn } from '@/lib/utils';

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
        className="w-full justify-start gap-2 px-4 text-muted-foreground"
        onClick={login}
      >
        {icon}
        <span>{label}</span>
        <Lock className="ml-auto h-3 w-3" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      className={cn(
        'w-full justify-start gap-2 px-4 text-foreground hover:bg-foreground/10',
        active && 'bg-foreground/10'
      )}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </Button>
  );
}

function SectionHeader({ title, locked = false }: { title: string; locked?: boolean }) {
  return (
    <div className="flex items-center justify-between px-4 text-xs font-semibold uppercase tracking-wider text-foreground/70">
      <span>{title}</span>
      {locked && (
        <Lock className="h-3 w-3 text-foreground/70" />
      )}
    </div>
  );
}

function Sidebar() {
  const { isOpen, close } = useSidebar();
  const pathname = usePathname();
  const router = useRouter();
  const { login } = useLogin({
    onComplete: (user, isNewUser) => {
      // Just connect wallet without navigation
    },
  });

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 md:hidden" 
          onClick={close}
        />
      )}
      
      <aside className={`fixed left-0 top-0 z-40 h-screen w-64 transform transition-transform md:translate-x-0 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full overflow-y-auto bg-black/95 px-3 py-4">
          <div className="mb-6 flex items-center">
            <Image
              src="/logo.png"
              alt="Settings"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-xl bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent">
              Settings
            </span>
          </div>

          <nav className="space-y-6">
            {/* Main Actions */}
            <div className="space-y-2">
              <SidebarButton 
                icon={<Home className="h-4 w-4" />} 
                label="Home" 
                active={pathname === '/'}
                onClick={() => router.push('/')}
              />
              <SidebarButton 
                icon={<Wallet className="h-4 w-4" />} 
                label="Connect Wallet"
                onClick={login}
              />
            </div>

            {/* Trading Tools */}
            <div className="space-y-2">
              <SectionHeader title="Trading Tools" locked />
              <div className="relative space-y-1">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-10 rounded-lg" />
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

            {/* Analysis Tools */}
            <div className="space-y-2">
              <SectionHeader title="Analysis Tools" locked />
              <div className="relative space-y-1">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-10 rounded-lg" />
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

            {/* Portfolio Management */}
            <div className="space-y-2">
              <SectionHeader title="Portfolio Management" locked />
              <div className="relative space-y-1">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-10 rounded-lg" />
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
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar; 