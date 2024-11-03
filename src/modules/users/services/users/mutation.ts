import { useToast } from "@/hooks/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createUser, deleteUser, updateUpdate } from "./api"
import { AxiosError } from "axios"

export const useCreateUser = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createUser,
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ["users"],
      })
      toast({
        title: `${data.message}`,
        description: `User has been created.`,
        variant: "default",
        className:
          "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200",
      })
    },

    async onError(error) {
      if (error instanceof AxiosError) {
        toast({
          title: `${error.response?.data.message}`,
          "aria-activedescendant": error.message,
          className: "bg-gradient-to-t from-orange-100 to-orange-100",
        })
      }
    },
  })
}
export const useUpdateUser = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateUpdate,
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ["users"],
      })
      toast({
        title: `${data.message}`,
        description: `User has been created.`,
        variant: "default",
        className:
          "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200",
      })
    },

    async onError(error) {
      if (error instanceof AxiosError) {
        toast({
          title: `${error.response?.data.message}`,
          "aria-activedescendant": error.message,
          className: "bg-gradient-to-t from-orange-100 to-orange-100",
        })
      }
    },
  })
}
export const useDeleteUser = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteUser,
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ["users"],
      })
      toast({
        title: `${data.message}`,
        description: `User has been created.`,
        variant: "default",
        duration: 2000,
        translate: "yes",
        className:
          "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200",
      })
    },

    async onError(error) {
      if (error instanceof AxiosError) {
        toast({
          title: `${error.response?.data.message}`,
          "aria-activedescendant": error.message,
          className: "bg-gradient-to-t from-orange-100 to-orange-100",
        })
      }
    },
  })
}
