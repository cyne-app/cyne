"use client"

import { useState } from "react"
import { Card } from "@/shared/ui/card"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { useChat } from "@/core/hooks/use-chat"
import { ChatMessage } from "./chat-message"

export function ChatInterface() {
  const [input, setInput] = useState("")
  const { messages, sendMessage, isLoading } = useChat()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    
    await sendMessage(input)
    setInput("")
  }

  return (
    <Card className="flex h-[600px] flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Solana..."
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  )
} 