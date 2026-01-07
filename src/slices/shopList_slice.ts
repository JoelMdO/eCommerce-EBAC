import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ShopListType } from "../types/shopList_type";
export interface ShopListState {
  products: ShopListType[];
  iconAdded?: number[];
  counter?: number;
  processed?: boolean;
}

const initialState: ShopListState = {
  products: [],
  iconAdded: [],
  counter: 0,
  processed: false,
};

// Create a slice for guides
export const shopListSlice = createSlice({
  name: "shopList",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ShopListType>) => {
      const incomingProduct = action.payload;
      //const id = incomingProduct.id;
      const existingIndex = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!existingIndex) {
        // replace existing product data
        console.log("product not found, adding");

        //state.products[existingIndex] = { ...incomingProduct };
        state.products.push({ ...incomingProduct });
      } else {
        console.log("product found");

        //state.products.push({ ...incomingProduct });
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
    countAddedProduct: (state, action: PayloadAction<ShopListType>) => {
      //const incomingProduct = action.payload;
      //const id = incomingProduct.id;
      const existingIndex = state.products.find(
        (product) => product.id === action.payload.id
      );
      console.log("id", action.payload.id);

      console.log("existingIndex", existingIndex);

      if (!existingIndex) {
        state.counter = (state.counter || 0) + 1;
      }
    },
    countRemovedProduct: (state) => {
      state.counter = (state.counter || 0) - 1;
    },
    processPayment: (state) => {
      state.processed = true;
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
  processPayment,
} = shopListSlice.actions;

// Export reducer
export default shopListSlice.reducer;
