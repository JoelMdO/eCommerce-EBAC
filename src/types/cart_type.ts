export interface cartType {
  id: number;
  name: string;
  price: string;
  image: string;
  tag?: string;
}

export interface CartState {
  cart: {
    iconAdded: number[];
    products: cartType[];
    processed: boolean;
  };
}
