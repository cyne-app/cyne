import { WalletBalance } from "./wallet-balance"
import { TokenList } from "./token-list"
import { ChatInterface } from "./chat-interface"

export function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1">
        <div className="flex flex-1 flex-col">
          <div className="flex-1 space-y-4 p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <WalletBalance />
              <TokenList />
            </div>
            <div className="grid gap-4">
              <ChatInterface />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 