import { createSlice } from "@reduxjs/toolkit";

interface OpenState {
  menuOpen: boolean;
  cartOpen: boolean;
}

const initialState: OpenState = {
  menuOpen: false,
  cartOpen: false,
};

export const openSlice = createSlice({
  name: "openState",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.menuOpen = true;
    },
    closeMenu: (state) => {
      state.menuOpen = false;
    },
    opencart: (state) => {
      state.cartOpen = true;
    },
    closecart: (state) => {
      state.cartOpen = false;
    },
  },
});

export const { openMenu, closeMenu, opencart, closecart } = openSlice.actions;

export default openSlice.reducer;
