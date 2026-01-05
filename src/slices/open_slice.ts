import { createSlice } from "@reduxjs/toolkit";

interface OpenState {
  menuOpen: boolean;
  shopListOpen: boolean;
}

const initialState: OpenState = {
  menuOpen: false,
  shopListOpen: false,
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
    openShopList: (state) => {
      state.shopListOpen = true;
    },
    closeShopList: (state) => {
      state.shopListOpen = false;
    },
  },
});

export const { openMenu, closeMenu, openShopList, closeShopList } =
  openSlice.actions;

export default openSlice.reducer;
