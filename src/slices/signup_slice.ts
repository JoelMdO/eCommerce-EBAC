import { createSlice } from "@reduxjs/toolkit";
import type { UserData } from "../types/form_type";

interface SignUpState {
  authenticated: boolean;
}

const initialState: SignUpState = {
  authenticated: false,
};

export const signUpSlice = createSlice({
  name: "signUpState",
  initialState,
  reducers: {
    setAuthenticated: (state) => {
      state.authenticated = true;
      //Upadate sessionStorage
      const userData = sessionStorage.getItem("userData");
      if (userData) {
        const parsedData: UserData = JSON.parse(userData);
        parsedData.loggedIn = true;
        sessionStorage.setItem("userData", JSON.stringify(parsedData));
      }
    },
  },
});

export const { setAuthenticated } = signUpSlice.actions;

export default signUpSlice.reducer;
