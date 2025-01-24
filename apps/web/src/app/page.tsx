import { AccountProvider } from "@/core/context/account"
import { CommandCenter } from "@/features/workspace/command-center"

export default function HomePage() {
  return (
    <AccountProvider>
      <CommandCenter />
    </AccountProvider>
  )
} 