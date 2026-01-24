export const LOGIN_HEADER_CONST = {
  welcome: "Bienvenido",
  logoAlt: "Logo",
} as const;

export type LoginHeaderKeys = keyof typeof LOGIN_HEADER_CONST;
