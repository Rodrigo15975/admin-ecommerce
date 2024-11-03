interface Categories {
  id: number
  category: string
}

interface CreateCategorie {
  category: string
  id?: number | undefined
}

interface UpdateCategorie extends CreateCategorie {}
