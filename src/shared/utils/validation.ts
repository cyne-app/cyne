import { z } from 'zod'

export const addressSchema = z.string().regex(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)

export const amountSchema = z.number().positive()

export const tokenSchema = z.object({
  address: addressSchema,
  symbol: z.string(),
  decimals: z.number().int().min(0).max(32),
})

export function validateAddress(address: string) {
  return addressSchema.safeParse(address)
}

export function validateAmount(amount: number) {
  return amountSchema.safeParse(amount)
}

export function validateToken(token: unknown) {
  return tokenSchema.safeParse(token)
} 