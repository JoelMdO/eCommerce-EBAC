export interface cartType {
  id: number;
  name: string;
  price: string;
  image: string;
  tag?: string;
}

export interface ProductState {
  cart: {
    iconAdded: number[];
    products: cartType[];
    processed: boolean;
  };
}
