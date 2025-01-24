import { cn } from "@/shared/utils"
import { Avatar } from "@/shared/ui/avatar"
import type { Message } from "@/core/types"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div
      className={cn(
        "flex w-full gap-2 py-2",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Avatar
        className="h-8 w-8"
        src={isUser ? "/avatars/user.png" : "/avatars/assistant.png"}
      />
      <div
        className={cn(
          "rounded-lg px-4 py-2",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground"
        )}
      >
        {message.content}
      </div>
    </div>
  )
} 