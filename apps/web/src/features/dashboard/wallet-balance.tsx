"use client"

import { useEffect, useState } from "react"
import { useWallet } from "@/core/providers/wallet"
import { Card } from "@/shared/ui/card"
import { formatBalance } from "@/shared/utils/format"

export function WalletBalance() {
  const { publicKey } = useWallet()
  const [balance, setBalance] = useState<number>(0)

  useEffect(() => {
    if (!publicKey) return
    // Implement balance fetching
  }, [publicKey])

  return (
    <Card className="p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Wallet Balance
        </h3>
        <div className="text-2xl font-bold">
          {formatBalance(balance)} SOL
        </div>
      </div>
    </Card>
  )
} 