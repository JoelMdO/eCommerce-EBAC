export const CHECKOUT_TOTAL = {
  totalLabel: "Total:",
  goToStore: "Ir a la tienda",
} as const;

export type CheckoutTotalKeys = keyof typeof CHECKOUT_TOTAL;
