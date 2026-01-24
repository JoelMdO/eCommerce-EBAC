import type { cartType } from "./cart_type";

export interface OrderType {
  user_id: number;
  cart: cartType;
  total: string;
}
