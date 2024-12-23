import { useGetAllCoupons } from '../services/queries'

export const useOneFindCoupon = (id: number | undefined) => {
  const { data } = useGetAllCoupons()
  const couponFind = data?.find((coupon) => coupon.id === id)

  if (couponFind) {
    const { id, code, discount, espiryDate, isGlobal, products } = couponFind
    return {
      id,
      code,
      discount,
      isGlobal,
      espiryDate,
      product: products.id,
    }
  }
  return undefined
}
