import { create } from 'zustand'

type Store = {
  openFormCreateDiscount: boolean
  setOpenFormCreateDiscount: () => void

  setIdDiscount: (id: number | undefined) => void
  idDiscount: number | undefined
}

export const storeCreateDiscountCategorie = create<Store>((set, get) => ({
  openFormCreateDiscount: false,
  idDiscount: undefined,
  setIdDiscount(idDiscount) {
    set({ idDiscount })
  },
  setOpenFormCreateDiscount() {
    const { openFormCreateDiscount } = get()
    set({ openFormCreateDiscount: !openFormCreateDiscount })
  },
}))
