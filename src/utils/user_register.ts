import type { FormType } from "../types/form_type";
const userRegister = (
  data: FormType,
  setServerError: (serverError: boolean) => void,
  setRegisteringIn: (registeringIn: boolean) => void,
  navigate: (path: string) => void,
  setRegisterSuccess: (registerSuccess: boolean) => void
) => {
  ///--------------------------------------------------------
  // IMPORTANT NOTE:
  // For dev purposes only the user database will be store
  // in the sessionStorage, in case the product goes to production
  // it needs to be handle to a proper DB.
  ///--------------------------------------------------------
  try {
    setRegisteringIn(true);
    sessionStorage.setItem("userData", JSON.stringify(data));

    setTimeout(() => {
      setRegisteringIn(false);
      setRegisterSuccess(true);
    }, 1000);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  } catch {
    setServerError(true);
    setRegisteringIn(false);
  }
};

export default userRegister;
