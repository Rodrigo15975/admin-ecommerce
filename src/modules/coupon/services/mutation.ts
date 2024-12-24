import { useToast } from '@/hooks/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { createCoupon, deleteCoupon, updateCoupon } from './api'

export const useCreateCoupon = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['create-coupon'],
    mutationFn: createCoupon,
    async onSuccess(response) {
      await queryClient.invalidateQueries({
        queryKey: ['coupons'],
      })

      toast({
        title: 'Cuopon created',
        description: response.message,
        duration: 3000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError) {
      const rawMessage = error.response?.data as { message: string }

      toast({
        title: rawMessage.message,
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}

export const useUpdateCoupon = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['update-coupon'],
    mutationFn: updateCoupon,
    async onSuccess(response) {
      await queryClient.invalidateQueries({
        queryKey: ['coupons'],
      })

      toast({
        title: 'Cuopon updated',
        description: response.message,
        duration: 3000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError) {
      const rawMessage = error.response?.data as { message: string }

      toast({
        title: rawMessage.message,
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}

export const useDeleteCoupon = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['delete-coupon'],
    mutationFn: deleteCoupon,
    async onSuccess(response) {
      await queryClient.invalidateQueries({
        queryKey: ['coupons'],
      })
      toast({
        title: 'Cuopon deleted',
        description: response.message,
        duration: 3000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError) {
      const rawMessage = error.response?.data as { message: string }

      toast({
        title: rawMessage.message,
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}
