import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getAllCategories } from './api'

export const useGetAllCategorys = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
    retry: 3, // Reintentar 3 veces
    retryDelay: 1000, // 1 segundo entre intentos
    placeholderData: keepPreviousData,
  })
