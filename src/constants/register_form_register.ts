export const REGISTER_FORM = {
  heading: "Registra tu cuenta",
  logoAlt: "Logo",
  formAria: "Formulario de registro de usuarios",
  labelName: "Nombre",
  placeholderName: "Nombre",
  nameError: "Nombre incorrecto",
  labelEmail: "Correo",
  placeholderEmail: "Correo",
  emailError: "Correo incorrecto",
  placeholderPassword: "Contraseña",
  placeholderPassword2: "Confirma tu Contraseña",
  passwordError: "Contraseña incorrecta",
  creatingText: "Creando registro...",
  submitText: "Registrate",
  cancelText: "Cancelar",
  serverError:
    "Error en registro, por favor intente de nuevo o contacte al administrador",
} as const;

export type RegisterFormKeys = keyof typeof REGISTER_FORM;
