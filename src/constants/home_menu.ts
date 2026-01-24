export const HOME_MENU = {
  title: "MENU",
  closeAria: "Cerrar",
  closeText: "X",
  logoutText: "Cerrar sesión",
  logoutAria: "Cerrar sesión",
} as const;

export type HomeMenuKeys = keyof typeof HOME_MENU;
