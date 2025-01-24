import { cn } from "@/shared/utils"
import { Avatar } from "@/shared/ui/avatar"
import type { DialogueMessage } from "@/core/types"

interface DialogueBubbleProps {
  message: DialogueMessage
}

export function DialogueBubble({ message }: DialogueBubbleProps) {
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