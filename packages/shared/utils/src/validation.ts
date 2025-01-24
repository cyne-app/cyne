import { z } from "zod"

export const addressSchema = z.string().regex(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)

export const amountSchema = z.number().positive()

export const tokenSchema = z.object({
  address: addressSchema,
  amount: amountSchema,
  decimals: z.number().int().min(0).max(32),
  symbol: z.string().optional(),
  name: z.string().optional(),
})

export function validateAddress(address: string): boolean {
  return addressSchema.safeParse(address).success
}

export function validateAmount(amount: number): boolean {
  return amountSchema.safeParse(amount).success
} 