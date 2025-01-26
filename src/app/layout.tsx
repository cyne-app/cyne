import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';
import { Telemetry } from '@vercel/speed-insights/edge';

import { SecurityLayer } from "@/core/context/auth"
import { ViewLayer } from '@/core/context/appearance';
import { Alert } from '@/ui/alert';
import { merge } from '@/utils';
import { Monitor } from '@/shared/analytics';
import { Frame } from 'flowbite-react';

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

export default function SystemLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={merge(
          `${geistSans.variable} ${geistMono.variable}`,
          'overflow-x-hidden antialiased',
        )}
      >
        <Frame>
          <SecurityLayer>
            <ViewLayer
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <main className="overflow-hidden md:overflow-visible">
                {children}
                <Alert />
              </main>
            </ViewLayer>
          </SecurityLayer>
        </Frame>
        <Analytics />
        <Telemetry />
        <Monitor />
      </body>
    </html>
  );
}
