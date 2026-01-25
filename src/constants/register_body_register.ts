export const REGISTER_BODY = {
  successEmoji: "🛍",
  successText: "Registro exitoso, serás redirigido al login",
} as const;

export type RegisterBodyKeys = keyof typeof REGISTER_BODY;
