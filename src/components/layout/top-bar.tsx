'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function TopBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-[#0B0F17]/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-8 w-8">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#FF4D4D' }} />
                    <stop offset="100%" style={{ stopColor: '#FF8A8A' }} />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
                  C
                </text>
              </svg>
            </div>
            <span className="font-semibold text-lg text-white">CYNE AI</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/docs" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Docs
            </Link>
            <Link href="/blog" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/roadmap" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Roadmap
            </Link>
            <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">
              About
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost"
              className="hidden md:flex text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              $CYNE
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-x-0 top-16 z-40 border-b bg-[#0B0F17]/90 backdrop-blur-md transition-transform md:hidden",
        isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="p-4 space-y-4">
          <Link href="/" className="block w-full text-left py-2 text-sm text-zinc-400 hover:text-white">
            Home
          </Link>
          <Link href="/docs" className="block w-full text-left py-2 text-sm text-zinc-400 hover:text-white">
            Docs
          </Link>
          <Link href="/blog" className="block w-full text-left py-2 text-sm text-zinc-400 hover:text-white">
            Blog
          </Link>
          <Link href="/roadmap" className="block w-full text-left py-2 text-sm text-zinc-400 hover:text-white">
            Roadmap
          </Link>
          <Link href="/about" className="block w-full text-left py-2 text-sm text-zinc-400 hover:text-white">
            About
          </Link>
        </div>
      </div>
    </>
  );
} 