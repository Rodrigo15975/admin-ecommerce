import { useToast } from '@/hooks/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { createArchiveProductVariant, deleteArhive, deleteProduct } from './api'
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
    onError(error: AxiosError) {
      const response = error.response?.data as { message: string }
      toast({
        title: response.message,
        description: 'Try again',
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}
export const useCreateArchiveProductVariant = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['create-archive-productVariant'],
    mutationFn: createArchiveProductVariant,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ['products'],
        exact: true,
      })
      toast({
        title: 'Created archive',
        description: data.message,
        duration: 4000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError) {
      const response = error.response?.data as { message: string }
      toast({
        title: response.message,
        description: 'Try again',
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}
export const useDeleteArchive = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['delete-product-archive'],
    mutationFn: deleteArhive,

    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ['products'],
        exact: true,
      })
      toast({
        title: 'Archive deleted',
        description: data.message,
        duration: 4000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError) {
      const response = error.response?.data as { message: string }
      toast({
        title: response.message,
        description: 'Try again',
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}
