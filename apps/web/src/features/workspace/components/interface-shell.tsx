"use client"

import { CommandCenter } from "./command-center"
import { PortfolioOverview } from "./portfolio-overview"
import { DialogueSystem } from "./dialogue-system"

export function InterfaceShell() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1">
        <div className="flex flex-1 flex-col">
          <div className="flex-1 space-y-4 p-8">
            <CommandCenter />
            <PortfolioOverview />
            <DialogueSystem />
          </div>
        </div>
      </main>
    </div>
  )
} 