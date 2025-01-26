import { Connection, PublicKey } from '@solana/web3.js'

export interface ChainAgent {
  getBalance: (address: string) => Promise<number>
  getTokens: (address: string) => Promise<TokenInfo[]>
  transfer: (to: string, amount: number) => Promise<string>
}

interface TokenInfo {
  address: string
  symbol: string
  decimals: number
  balance: number
}

export class SolanaChainAgent implements ChainAgent {
  private connection: Connection

  constructor(endpoint: string) {
    this.connection = new Connection(endpoint)
  }

  async getBalance(address: string): Promise<number> {
    const pubkey = new PublicKey(address)
    return this.connection.getBalance(pubkey)
  }

  async getTokens(address: string): Promise<TokenInfo[]> {
    // Implementation
    return []
  }

  async transfer(to: string, amount: number): Promise<string> {
    // Implementation
    return ''
  }
} 