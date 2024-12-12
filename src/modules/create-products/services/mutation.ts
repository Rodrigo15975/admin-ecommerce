import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createProduct } from './api'
import { useToast } from '@/hooks/use-toast'
import { AxiosError } from 'axios'

export const useCreateProduct = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['creating-products'],
    mutationFn: createProduct,
    async onSuccess(response) {
      await queryClient.invalidateQueries({
        queryKey: ['products'],
      })
      toast({
        title: 'Products creating',
        description: response.message,
        duration: 4000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError) {
      const { message } = error.response?.data as { message: string }

      toast({
        title: message,
        description: 'Error to creating product',
        duration: 2000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}
