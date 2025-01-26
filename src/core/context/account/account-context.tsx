import { createContext, useContext, useState } from 'react'

interface AccountContext {
  address: string | null
  balance: number
  connect: () => Promise<void>
  disconnect: () => Promise<void>
}

const AccountContext = createContext<AccountContext | null>(null)

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null)
  const [balance, setBalance] = useState(0)

  const connect = async () => {
    // Implementation
  }

  const disconnect = async () => {
    // Implementation
  }

  return (
    <AccountContext.Provider value={{ address, balance, connect, disconnect }}>
      {children}
    </AccountContext.Provider>
  )
}

export const useAccount = () => {
  const context = useContext(AccountContext)
  if (!context) throw new Error('useAccount must be used within AccountProvider')
  return context
} 