import type { cartType } from "./cart_type";

export interface OrderType {
  order: {
    user_name: string;
    cart: cartType;
    total: number;
  };
  token: string;
}
