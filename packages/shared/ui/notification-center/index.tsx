"use client"

import { Toaster } from "sonner"
import { useAppearance } from "@/core/context/appearance"

export function NotificationCenter() {
  const { mode } = useAppearance()
  
  return (
    <Toaster
      theme={mode as "light" | "dark"}
      className="notification-center group"
      toastOptions={{
        classNames: {
          toast: "group notification group-[.notification-center]:bg-background group-[.notification-center]:text-foreground group-[.notification-center]:border-border group-[.notification-center]:shadow-lg",
          description: "group-[.notification]:text-muted-foreground",
          actionButton: "group-[.notification]:bg-primary group-[.notification]:text-primary-foreground",
          cancelButton: "group-[.notification]:bg-muted group-[.notification]:text-muted-foreground",
        },
      }}
    />
  )
} 