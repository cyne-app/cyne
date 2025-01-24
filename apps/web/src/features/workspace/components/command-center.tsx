"use client"

import { useAccount } from "@/core/context/account"
import { Card } from "@/shared/ui/card"
import { Button } from "@/shared/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"

export function CommandCenter() {
  const { connect, connected } = useAccount()

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Command Center</h2>
        {!connected && (
          <Button onClick={connect} size="sm">
            <PlusIcon className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        )}
      </div>
    </Card>
  )
} 