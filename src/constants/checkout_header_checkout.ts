export const CHECKOUT_HEADER = {
  thankYou: "Gracias por su compra!",
  forgotProduct: "Ops! Creo que olvidaste agregar algún producto.",
  excellent: "Excelente selección",
  backToStore: "Volver a la tienda",
} as const;

export type CheckoutHeaderKeys = keyof typeof CHECKOUT_HEADER;
