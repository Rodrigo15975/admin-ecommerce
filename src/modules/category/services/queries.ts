import { useQuery } from "@tanstack/react-query"
import { getAllCategories } from "./api"

export const useGetAllCategorys = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    // staleTime: 10000,
  })
