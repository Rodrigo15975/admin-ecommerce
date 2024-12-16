import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/pathServices/pathServices'

export const deleteProduct = async (id: number) =>
  await useMethods.DELETE<HttpResponse>(`${PathServices.PRODUCTS}/${id}`)

export const deleteArhive = async (key_url: string) =>
  await useMethods.DELETE<HttpResponse>(
    `${PathServices.PRODUCTS}?key=${key_url}`
  )

export const createArchiveProductVariant = async ({
  categorie,
  data,
  id,
}: createArchiveProductVariant) =>
  await useMethods.POST<HttpResponse, FormData>(
    `${PathServices.PRODUCTS}/one-variant/${id}/${categorie}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )
