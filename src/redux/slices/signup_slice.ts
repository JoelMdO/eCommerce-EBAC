import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUser";
import { createUser } from "../thunks/createUser";
import { logoutUser } from "../thunks/logoutUser";

export interface SignUpState {
  status?: "loggedout" | "loading" | "loggedin" | "failed" | "registered";
  authenticated: boolean;
  error: string | null;
  currentUser: {
    email: string;
    password: string;
    name: string;
  };
}

export const initialState: SignUpState = {
  authenticated: false,
  status: "loggedout",
  error: null,
  currentUser: {
    email: "",
    password: "",
    name: "",
  },
};

export const signUpSlice = createSlice({
  name: "signUpState",
  initialState,
  reducers: {
    setAuthenticated: (state) => {
      state.authenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "loggedin";
        state.currentUser = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch user";
      })
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "registered";
        state.currentUser = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to create user";
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = "loggedout";
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to logout user";
      });
  },
});

export const { setAuthenticated } = signUpSlice.actions;

export default signUpSlice.reducer;
