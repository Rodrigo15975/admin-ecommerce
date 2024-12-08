import { useMethods } from "@/adapters/methods"
import { PathServices } from "@/pathServices/pathServices"
import { useQuery } from "@tanstack/react-query"

export const useGetAllRoles = () =>
  useQuery({
    queryFn: getAllRoles,
    queryKey: ["roles"],
    staleTime: 100000,
  })

const getAllRoles = async () =>
  await useMethods.GET<Roles[]>(`${PathServices.URL}${PathServices.ROLE}`)