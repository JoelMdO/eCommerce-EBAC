export const LOGIN_FORM = {
  formAria: "Formulario de inicio de sesión",
  labelEmail: "Correo",
  placeholderEmail: "Correo",
  emailError: "Email incorrecto",
  labelPassword: "Contraseña",
  placeholderPassword: "Contraseña",
  passwordMinLength: "Contraseña demasiado corta",
  passwordIncorrect: "Contraseña incorrecta",
  loggingInText: "Iniciando sesión...",
  submitText: "Iniciar sesión",
  serverError:
    "Error de acceso, verifique sus credenciales o contacte al administrador",
  noAccountText: "¿Sin cuenta, aún?",
  registerLinkText: "Regístrate",
} as const;

export type LoginFormKeys = keyof typeof LOGIN_FORM;
