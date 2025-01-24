import { Card } from "@/shared/ui/card"
import { formatAmount } from "@/shared/utils"
import type { Asset } from "@/core/types"

interface AssetCardProps {
  asset: Asset
}

export function AssetCard({ asset }: AssetCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {asset.icon && (
            <img 
              src={asset.icon} 
              alt={asset.symbol || 'Token'} 
              className="h-8 w-8 rounded-full"
            />
          )}
          <div>
            <p className="font-medium">{asset.symbol || 'Unknown Token'}</p>
            <p className="text-sm text-muted-foreground">{asset.name}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-medium">
            {formatAmount(asset.amount, asset.decimals)}
          </p>
        </div>
      </div>
    </Card>
  )
} 