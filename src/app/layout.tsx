import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/edge';

import { AuthProvider } from "@/providers/id"
import { ThemeProvider } from '@/providers/look';
import { Toaster } from '@/kit/ui/sonner';
import { cn } from '@/kit/utils';
import { GoogleAnalytics } from '@/kit/analytics';
import { Flowbite } from 'flowbite-react';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | CYNE AI',
    default: 'CYNE AI - Where Solana Meets Intelligence',
  },
  description: 'Where Solana Meets Intelligence',

  icons: {
    icon: '/logo.svg',
  },
};

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable}`,
          'overflow-x-hidden antialiased',
        )}
      >
        <Flowbite>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <main className="overflow-hidden md:overflow-visible">
                {children}
                <Toaster />
              </main>
            </ThemeProvider>
          </AuthProvider>
        </Flowbite>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
