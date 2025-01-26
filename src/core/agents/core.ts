import { ChatCompletionMessage } from 'openai/resources/chat'

export interface CoreAgent {
  chat: (messages: ChatCompletionMessage[]) => Promise<string>
  analyze: (content: string) => Promise<string>
  suggest: (context: string) => Promise<string[]>
}

export class DefaultCoreAgent implements CoreAgent {
  async chat(messages: ChatCompletionMessage[]): Promise<string> {
    // Implementation
    return ''
  }

  async analyze(content: string): Promise<string> {
    // Implementation
    return ''
  }

  async suggest(context: string): Promise<string[]> {
    // Implementation
    return []
  }
} 