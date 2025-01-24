'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ModernLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
}

export function ModernLayout({ children, sidebar, header }: ModernLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Modern Background Effects */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.02] bg-center" />
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative flex min-h-screen">
        {/* Animated Sidebar */}
        {sidebar && (
          <AnimatePresence mode="wait">
            {mounted && (
              <motion.aside
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                className="glass-card fixed left-4 top-4 bottom-4 w-[280px] overflow-hidden"
              >
                <div className="h-full p-4 overflow-y-auto">
                  {sidebar}
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
        )}

        {/* Main Content Area */}
        <main className={cn(
          "flex-1 flex flex-col transition-all duration-200",
          sidebar ? "ml-[300px]" : "ml-0"
        )}>
          {/* Glass Header */}
          {header && (
            <motion.header 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="glass-card sticky top-4 mx-4 z-10"
            >
              <div className="px-6 py-4">
                {header}
              </div>
            </motion.header>
          )}
          
          {/* Content Container */}
          <div className="flex-1 p-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card min-h-[calc(100vh-8rem)]"
            >
              <div className="h-full p-6">
                {children}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
} 