export type ItemKey = "cart" | "wishlist" | "checkout"

export interface IProduct {
  id: string
  title: string
  description: string
  price: number
  slug: string
  mainImage: string
  category: ICategory
  gallery: string[]
}
export interface ICategory {
  id: string
  name: string
  image: string
  slug: string
}

export interface IItem extends IProduct {
  count: number;
}


export interface IState {
  cart: IItem[]
  wishlist: IItem[]
  checkout: IItem[]
}

export interface IItem extends IProduct {
  count: number
}

export interface IContext {
  state: IState
  addItem: (key: ItemKey, product: IProduct, count?: number) => void
  removeItem: (key: ItemKey, productId: string) => void
  increaseCount: (key: ItemKey, productId: string) => void
  decreaseCount: (key: ItemKey, productId: string) => void
  isAdded: (key: ItemKey, productId: string) => boolean
  resetItems: (key: ItemKey) => void
}