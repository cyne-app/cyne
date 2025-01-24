"use client"

import { useEffect, useState } from "react"
import { useAccount } from "@/core/context/account"
import { Card } from "@/shared/ui/card"
import { formatAmount } from "@/core/utils"

export function AssetSummary() {
  const { publicKey } = useAccount()
  const [balance, setBalance] = useState<number>(0)

  useEffect(() => {
    if (!publicKey) return
    // Implement balance fetching
  }, [publicKey])

  return (
    <Card className="p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Total Balance
        </h3>
        <div className="text-2xl font-bold">
          {formatAmount(balance)} SOL
        </div>
      </div>
    </Card>
  )
} 