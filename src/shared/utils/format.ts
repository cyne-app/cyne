export function formatNumber(value: number, options: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat('en-US', options).format(value)
}

export function formatCurrency(value: number, currency = 'USD') {
  return formatNumber(value, {
    style: 'currency',
    currency,
  })
}

export function formatCompact(value: number) {
  return formatNumber(value, {
    notation: 'compact',
  })
}

export function formatPercent(value: number) {
  return formatNumber(value, {
    style: 'percent',
    minimumFractionDigits: 2,
  })
}

export function truncateAddress(address: string, chars = 4) {
  if (!address) return ''
  const start = address.slice(0, chars)
  const end = address.slice(-chars)
  return `${start}...${end}`
} 