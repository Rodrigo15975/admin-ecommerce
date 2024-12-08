import { create } from "zustand"

type Store = {
  id: number | undefined
  setId: (id: number | undefined) => void
}

export const storeEditcoupon = create<Store>((set) => ({
  id: undefined,
  setId(id: number | undefined) {
    set({ id })
  },
}))
