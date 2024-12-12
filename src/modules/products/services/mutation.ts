import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteProduct } from './api'
import { useToast } from '@/hooks/use-toast'

export const useDeleteProduct = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['delete-product'],
    mutationFn: deleteProduct,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ['products'],
        exact: true,
      })
      toast({
        title: 'Product deleted',
        description: data.message,
        duration: 4000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
  })
}
