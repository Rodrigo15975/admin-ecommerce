interface ProductVariant {
  color: string
  image: null | File
}

interface ProductInventory {
  minStock: number
  stock: boolean
}

interface Product {
  product: string
  id?: number
  productVariant: ProductVariant[]
  price: number
  size: string[]
  gender: string
  brand: string
  description: string
  quantity: number
  is_new: boolean
  category: string
  discount: number
  productInventory: ProductInventory
}

interface InitialValuesProduct {
  products: Product[]
}
