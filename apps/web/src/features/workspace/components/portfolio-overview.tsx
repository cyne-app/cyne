"use client"

import { AssetSummary } from "./asset-summary"
import { HoldingsGrid } from "./holdings-grid"

export function PortfolioOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <AssetSummary />
      <HoldingsGrid />
    </div>
  )
} 