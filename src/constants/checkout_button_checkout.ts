export const CHECKOUT_BUTTON = {
  payText: "Pagar",
  cancelText: "Cancelar",
} as const;

export type CheckoutButtonKeys = keyof typeof CHECKOUT_BUTTON;
