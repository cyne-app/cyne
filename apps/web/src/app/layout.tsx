import { AppearanceProvider } from "@/core/context/appearance"
import { Analytics } from "@/core/telemetry/analytics"
import { NotificationCenter } from "@/shared/ui/notification-center"
import "@/shared/styles/globals.css"

export const metadata = {
  title: "CYNE - Intelligent Blockchain Interface",
  description: "Next-generation Solana interaction platform powered by AI"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppearanceProvider>
          {children}
          <NotificationCenter />
          <Analytics />
        </AppearanceProvider>
      </body>
    </html>
  )
} 