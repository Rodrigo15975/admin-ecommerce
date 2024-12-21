interface Coupon {
  id?: number
  code: string
  discount: number
  isGlobal: boolean
  isNew: boolean
  espiryDate: string
}

interface GetAllCoupons extends Coupon {}

interface CreateCoupon extends Coupon {
  product: number | undefined | string
}
