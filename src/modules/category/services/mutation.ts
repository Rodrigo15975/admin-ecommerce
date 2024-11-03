import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCategorie, deleteCategorie, updateCategorie } from "./api"
import { useToast } from "@/hooks/use-toast"
import { AxiosError } from "axios"

export const useCreateCategorie = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    // retry: 1,
    // gcTime: 0,
    mutationKey: ["createCategorie"],
    mutationFn: createCategorie,
    onError(error) {
      if (error instanceof AxiosError) {
        toast({
          title: `${error.response?.data.message}`,
          "aria-activedescendant": error.message,
          className: "bg-gradient-to-t from-orange-100 to-orange-100",
        })
      }
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ["categories"],
      })
      toast({
        title: `${data.message}`,
        description: `Category has been created.`,
        variant: "default",
        className:
          "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200",
      })
    },
  })
}
export const useDeleteCategorie = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    // retry: 3,
    // retryDelay: 2000,
    mutationKey: ["deleteCategorie"],
    mutationFn: deleteCategorie,
    onError(error) {
      if (error instanceof AxiosError) {
        toast({
          title: `${error.response?.data.message}`,
          "aria-activedescendant": error.message,
          className: "bg-gradient-to-t from-orange-100 to-orange-100",
        })
      }
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ["categories"],
      })
      toast({
        title: `${data.message}`,
        description: `Category has been created.`,
        variant: "default",
        className:
          "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200",
      })
    },
  })
}
export const useUpdateCategorie = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    // retry: 3,
    // retryDelay: 2000,
    mutationKey: ["updateCategorie"],
    mutationFn: updateCategorie,
    onError(error) {
      if (error instanceof AxiosError) {
        toast({
          title: `${error.response?.data.message}`,
          "aria-activedescendant": error.message,
          className: "bg-gradient-to-t from-orange-100 to-orange-100",
        })
      }
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ["categories"],
      })
      toast({
        title: `${data.message}`,
        description: `Category has been created.`,
        variant: "default",
        className:
          "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200",
      })
    },
  })
}
