import { processPayment } from "../slices/shopList_slice";
import { setAuthenticated } from "../slices/signup_slice";
import type { FormType, UserData } from "../types/form_type";
export const formSubmission = (
  data: FormType,
  dispatchEvent: (action: ReturnType<typeof setAuthenticated>) => void,
  setServerError: (serverError: boolean) => void,
  setLoggingIn: (loggingIn: boolean) => void,
  navigate: (path: string) => void
) => {
  ///--------------------------------------------------------
  // IMPORTANT NOTE:
  // For dev purposes only the user database will be store
  // in the sessionStorage, in case the product goes to production
  // it needs to be handle to a proper DB.
  ///--------------------------------------------------------
  try {
    setLoggingIn(true);
    const userData = sessionStorage.getItem("userData");

    if (userData) {
      const parsedData: UserData = JSON.parse(userData);
      if (
        parsedData.email === data.email &&
        parsedData.password === data.password
      ) {
        dispatchEvent(setAuthenticated());
        setTimeout(() => {
          setLoggingIn(false);
          navigate("/home");
        }, 1000);
      } else {
        setServerError(true);
        setLoggingIn(false);
      }
    } else {
      setServerError(true);
      setLoggingIn(false);
    }
  } catch {
    setServerError(true);
    setLoggingIn(false);
  }
};

export const formPayment = (
  dispatchEvent: (action: ReturnType<typeof processPayment>) => void,
  closeDialog: () => void
) => {
  ///--------------------------------------------------------
  // IMPORTANT NOTE:
  // For dev purposes no store of this data, in case the product goes to production
  // it needs to be handle to a proper DB.
  ///--------------------------------------------------------
  dispatchEvent(processPayment());
  closeDialog();
};
