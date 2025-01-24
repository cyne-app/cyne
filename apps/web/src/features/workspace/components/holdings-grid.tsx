"use client"

import { useEffect, useState } from "react"
import { useAccount } from "@/core/context/account"
import { Card } from "@/shared/ui/card"
import { ScrollArea } from "@/shared/ui/scroll-area"
import { AssetCard } from "./asset-card"
import type { Asset } from "@/core/types"

export function HoldingsGrid() {
  const { publicKey } = useAccount()
  const [assets, setAssets] = useState<Asset[]>([])

  useEffect(() => {
    if (!publicKey) return
    // Implement asset fetching
  }, [publicKey])

  return (
    <Card className="col-span-2">
      <div className="p-4">
        <h3 className="text-sm font-medium text-muted-foreground">
          Portfolio Assets
        </h3>
      </div>
      <ScrollArea className="h-[300px]">
        <div className="grid gap-2 p-2">
          {assets.map((asset) => (
            <AssetCard key={asset.address} asset={asset} />
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
} 