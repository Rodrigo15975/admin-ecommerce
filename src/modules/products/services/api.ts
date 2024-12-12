import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/pathServices/pathServices'

export const deleteProduct = async (id: number) =>
  await useMethods.DELETE<HttpResponse>(`${PathServices.PRODUCTS}/${id}`)
