export interface ShopListType {
  id: number;
  name: string;
  price: string;
  image: string;
  tag?: string;
}

export interface ProductState {
  shopList: {
    iconAdded: number[];
    products: ShopListType[];
    processed: boolean;
  };
}
