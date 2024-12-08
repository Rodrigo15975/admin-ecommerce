import { parseISO, format } from 'date-fns'

export function convertedDateISO(date: string): string {
  const parsedStartDate = parseISO(date).toISOString()
  return parsedStartDate
}

export const convertedYearMonthDay = (date: string): string => {
  const parsedDate = parseISO(date) // Convierte el string a un objeto Date
  return format(parsedDate, 'yyyy-MM-dd') // Formatea la fecha como 'año-mes-día'
}
