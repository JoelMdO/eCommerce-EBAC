import type { UserData } from "../types/form_type";
import { createUser } from "../redux/thunks/createUser";
import type { AppDispatch } from "../redux/store/store";
const userRegister = (
  data: UserData,
  setServerError: (serverError: boolean) => void,
  setRegisteringIn: (registeringIn: boolean) => void,
  navigate: (path: string) => void,
  setRegisterSuccess: (registerSuccess: boolean) => void,
  status: string | undefined,
  dispatch: AppDispatch,
) => {
  ///--------------------------------------------------------
  // IMPORTANT NOTE:
  // For dev purposes only the user database will be store
  // in the sessionStorage, in case the product goes to production
  // it needs to be handle to a proper DB.
  ///--------------------------------------------------------

  try {
    setRegisteringIn(true);
    dispatch(createUser(data));

    if (status === "registered") {
      setRegisteringIn(false);
      setRegisterSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else if (status === "failed") {
      console.log("doing failed");

      setServerError(true);
      setRegisteringIn(false);
    } else {
      console.log("doing else");
      setServerError(true);
      setRegisteringIn(false);
    }
  } catch {
    setServerError(true);
    setRegisteringIn(false);
  }
};

export default userRegister;
