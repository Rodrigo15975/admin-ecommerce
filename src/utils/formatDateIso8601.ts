import { parseISO, format, formatDistanceToNow, isBefore } from 'date-fns'

export function convertedDateISO(date: string): string {
  const parsedStartDate = parseISO(date).toISOString()
  return parsedStartDate
}

export const convertedYearMonthDay = (date: string): string => {
  const parsedDate = parseISO(date) // Convierte el string a un objeto Date
  return format(parsedDate, 'yyyy-MM-dd') // Formatea la fecha como 'año-mes-día'
}

export const convertedDayMonthYear = (date: string): string => {
  const parsedDate = parseISO(date) // Convierte el string a un objeto Date
  return format(parsedDate, 'dd-MM-yyyy') // Formatea la fecha como 'día-mes-año'
}

export const convertedDayRest = (expirationDate: string): string => {
  const parsedDate = parseISO(expirationDate)

  if (isBefore(parsedDate, new Date())) return 'Expired'

  const timeRemaining = formatDistanceToNow(parsedDate, {
    addSuffix: true,
    includeSeconds: true,
  })

  return timeRemaining
}
