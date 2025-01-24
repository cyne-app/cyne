"use client"

import { useEffect, useState } from "react"
import { useWallet } from "@/core/providers/wallet"
import { Card } from "@/shared/ui/card"
import { ScrollArea } from "@/shared/ui/scroll-area"
import { TokenItem } from "./token-item"
import type { TokenAccount } from "@/core/types"

export function TokenList() {
  const { publicKey } = useWallet()
  const [tokens, setTokens] = useState<TokenAccount[]>([])

  useEffect(() => {
    if (!publicKey) return
    // Implement token fetching
  }, [publicKey])

  return (
    <Card className="col-span-2">
      <div className="p-4">
        <h3 className="text-sm font-medium text-muted-foreground">
          Token Holdings
        </h3>
      </div>
      <ScrollArea className="h-[300px]">
        <div className="space-y-1 p-2">
          {tokens.map((token) => (
            <TokenItem key={token.address} token={token} />
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
} 