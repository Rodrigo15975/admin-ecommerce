import { useToast } from "@/hooks/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useCookies } from "react-cookie"
import { auth, logout } from "./api"
export const useAuth = () => {
  const { toast } = useToast()
  const [_, setCookie] = useCookies(["auth"])
  const router = useRouter()

  return useMutation({
    mutationFn: auth,
    onSuccess(data) {
      const { auth } = data
      if (auth) {
        setCookie("auth", auth)
        router.push("/dashboard") // Asegúrate de que el `push` se ejecute
      }
    },
    onError(error) {
      if (error instanceof AxiosError) {
        toast({
          title: `${error.response?.data.message}`,
          "aria-activedescendant": error.message,
          className: "bg-gradient-to-t from-orange-200 to-orange-200",
        })
      }
    },
  })
}

export const useLogout = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const [__, setCookie] = useCookies(["auth"])
  const router = useRouter()

  return useMutation({
    mutationFn: logout,
    async onSuccess(data) {
      if (data.success) {
        setCookie("auth", data.auth)
        router.push("/", {
          scroll: false,
        })
        await queryClient.cancelQueries()
        queryClient.clear()
      }
    },
    onError(error) {
      console.log(error)
      toast({
        title: "Error al cerrar sesión",
        "aria-activedescendant": error.message,
        variant: "destructive",
      })
    },
  })
}
