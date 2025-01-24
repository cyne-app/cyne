export function formatRelativeTime(timestamp: number): string {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  const diff = timestamp - Date.now()
  const diffInSeconds = Math.floor(diff / 1000)
  
  if (Math.abs(diffInSeconds) < 60) return rtf.format(diffInSeconds, 'seconds')
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (Math.abs(diffInMinutes) < 60) return rtf.format(diffInMinutes, 'minutes')
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (Math.abs(diffInHours) < 24) return rtf.format(diffInHours, 'hours')
  const diffInDays = Math.floor(diffInHours / 24)
  return rtf.format(diffInDays, 'days')
}

export function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  
  if (hours > 0) return `${hours}h ${minutes % 60}m`
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`
  return `${seconds}s`
} 