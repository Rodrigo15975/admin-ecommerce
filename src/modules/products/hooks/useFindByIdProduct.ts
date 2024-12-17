import { useGetAllProducts } from '@/modules/create-products/services/queries'

export const useFindByIdProduct = (id: number | undefined) => {
  const { data } = useGetAllProducts()

  const productFind = data?.find((product) => product.id === id)
  return {
    productFind,
  }
}
