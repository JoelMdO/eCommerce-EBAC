export const CART_HEADER = {
  title: "CARRITO",
  closeText: "X",
} as const;

export type CartHeaderKeys = keyof typeof CART_HEADER;
