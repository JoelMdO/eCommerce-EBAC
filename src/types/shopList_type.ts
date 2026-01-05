export interface ShopList {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface ProductState {
  shopList: {
    iconAdded: number[];
    products: ShopList[];
  };
}
