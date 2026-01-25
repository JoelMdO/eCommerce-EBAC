export const CHECKOUT_SHIPMENT = {
  heading: "Datos de envío",
  placeholderName: "Nombre completo",
  ariaName: "Nombre",
  nameError: "Nombre incorrecto",
  placeholderAddress: "Dirección",
  addressError: "Dirección incorrecta",
  placeholderCard: "Tarjeta de crédito",
  cardError: "Tarjeta incorrecta",
  placeholderPhone: "Telefono",
  phoneError: "Teléfono incorrecto",
  payButton: "Pagar",
} as const;

export type CheckoutShipmentKeys = keyof typeof CHECKOUT_SHIPMENT;
