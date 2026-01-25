export interface ProductType {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
  tag?: string;
}

export interface ProductState {
  products: {
    items: ProductType[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  };
}
