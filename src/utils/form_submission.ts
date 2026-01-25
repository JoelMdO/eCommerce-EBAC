import { setAuthenticated } from "../redux/slices/signup_slice";
import type { AppDispatch } from "../redux/store/store";
import { fetchUser } from "../redux/thunks/fetchUser";
import type { UserData } from "../types/form_type";
export const formSubmission = (
  data: Partial<UserData>,
  dispatch: AppDispatch,
  setServerError: (serverError: boolean) => void,
  setLoggingIn: (loggingIn: boolean) => void,
  navigate: (path: string) => void,
) => {
  ///--------------------------------------------------------
  // IMPORTANT NOTE:
  // For dev purposes only the user database will be store
  // in the sessionStorage, in case the product goes to production
  // it needs to be handle to a proper DB.
  ///--------------------------------------------------------
  try {
    setLoggingIn(true);
    const user = { username: data.username, password: data.password };
    dispatch(fetchUser(user))
      .unwrap()
      .then(() => {
        dispatch(setAuthenticated());
        setTimeout(() => {
          setLoggingIn(false);
          navigate("/home");
        }, 1000);
      })
      .catch(() => {
        setServerError(true);
        setLoggingIn(false);
      });
  } catch {
    setServerError(true);
    setLoggingIn(false);
  }
};
