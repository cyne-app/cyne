export function formatTransactionDate(date: Date | number): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))
}

export function formatTransactionTime(date: Date | number): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(new Date(date))
}

export function formatTransactionDateTime(date: Date | number): string {
  return `${formatTransactionDate(date)} ${formatTransactionTime(date)}`
}

export function formatTimeSince(date: Date | number): string {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  const now = new Date().getTime()
  const diff = new Date(date).getTime() - now

  const diffInSeconds = Math.floor(diff / 1000)
  if (Math.abs(diffInSeconds) < 60) {
    return rtf.format(diffInSeconds, 'seconds')
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (Math.abs(diffInMinutes) < 60) {
    return rtf.format(diffInMinutes, 'minutes')
  }

  const diffInHours = Math.floor(diffInMinutes / 60)
  if (Math.abs(diffInHours) < 24) {
    return rtf.format(diffInHours, 'hours')
  }

  const diffInDays = Math.floor(diffInHours / 24)
  return rtf.format(diffInDays, 'days')
} 