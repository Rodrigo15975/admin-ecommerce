interface Coupon {
  id: number
  code: string
  discount: number
  isGlobal: boolean
  isNew: boolean
  espiryDate: string | Date
}
interface CreateCoupon extends Omit<Coupon, "id"> {
  productId: number | undefined | string
}
