import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ShopList } from "../types/shopList_type";

export interface ShopListState {
  products: ShopList[];
  iconAdded?: number[];
  counter?: number;
}

const initialState: ShopListState = {
  products: [],
  iconAdded: [],
  counter: 0,
};

// Create a slice for guides
export const shopListSlice = createSlice({
  name: "shopList",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ShopList>) => {
      const incomingProduct = action.payload;
      const id = incomingProduct.id;
      const existingIndex = state.products.findIndex(
        (product) => product.id === id
      );
      if (existingIndex !== -1) {
        // replace existing product data
        state.products[existingIndex] = { ...incomingProduct };
      } else {
        state.products.push({ ...incomingProduct });
      }
    },
    deleteProduct: (
      state,
      action: PayloadAction<{
        id: number;
      }>
    ) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
      }
    },
    changeIconToAdded: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (!state.iconAdded) state.iconAdded = [];
      if (!state.iconAdded.includes(id)) state.iconAdded.push(id);
    },
    removedIconToAdded: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (!state.iconAdded) return;
      state.iconAdded = state.iconAdded.filter((i) => i !== id);
    },
    countAddedProduct: (state) => {
      state.counter = (state.counter || 0) + 1;
    },
    countRemovedProduct: (state) => {
      state.counter = (state.counter || 0) - 1;
    },
  },
});

// Export actions
export const {
  addProduct,
  deleteProduct,
  changeIconToAdded,
  removedIconToAdded,
  countAddedProduct,
  countRemovedProduct,
} = shopListSlice.actions;

// Export reducer
export default shopListSlice.reducer;
