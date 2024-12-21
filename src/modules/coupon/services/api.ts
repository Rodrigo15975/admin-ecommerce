import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/pathServices/pathServices'

export const getAllCoupons = async () =>
  await useMethods.GET<Coupon[]>(`${PathServices.COUPON}`)

export const createCoupon = async (data: CreateCoupon) =>
  await useMethods.POST<HttpResponse, CreateCoupon>(
    `${PathServices.COUPON}`,
    data
  )
