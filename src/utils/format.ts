function parseDate(dateStr: string): Date {
  const [year, month] = dateStr.split('-').map(Number)
  return new Date(year, month - 1)
}

function toMonthYear(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export function formatDateRange(startDate: string, endDate: string | null): string {
  const start = toMonthYear(parseDate(startDate))
  const end = endDate ? toMonthYear(parseDate(endDate)) : 'Present'
  return `${start} – ${end}`
}

export function formatDuration(startDate: string, endDate: string | null): string {
  const start = parseDate(startDate)
  const end = endDate ? parseDate(endDate) : new Date()
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const years = Math.floor(months / 12)
  const rem = months % 12
  if (years === 0) return `${rem}mo`
  if (rem === 0) return `${years}yr`
  return `${years}yr ${rem}mo`
}
