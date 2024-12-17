import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from './api'

export const useGetAllProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    // refetchInterval: 600000, // 1 minuto entre refrescos
    retry: 3, // Reintentar 3 veces
    // staleTime: 300000,
    gcTime: 600000,
  })
