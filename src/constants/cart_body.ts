export const CART_BODY = {
  emptyText: "Animate a comprar, aun no hay productos en el carrito",
} as const;

export type CartBodyKeys = keyof typeof CART_BODY;
