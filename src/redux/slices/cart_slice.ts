import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { cartType } from "../../types/cart_type";
export interface cartState {
  products: cartType[];
  iconAdded?: number[];
  counter?: number;
  processed?: boolean;
}

const initialState: cartState = {
  products: [],
  iconAdded: [],
  counter: 0,
  processed: false,
};

// Create a slice for guides
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<cartType>) => {
      const incomingProduct = action.payload;

      // Check if product already exists in the local storage
      // If not save it, otherwise do nothing
      const products = localStorage.getItem("cartProducts");
      if (!products) {
        localStorage.setItem(
          "cartProducts",
          JSON.stringify([...state.products, incomingProduct]),
        );
        state.products.push(incomingProduct);
      }
      if (products) {
        const savedProducts = JSON.parse(products);
        const existingIndex = savedProducts.find(
          (product: cartType) => product.id === incomingProduct.id,
        );

        if (!existingIndex) {
          localStorage.setItem(
            "cartProducts",
            JSON.stringify([...savedProducts, incomingProduct]),
          );
          state.products.push(incomingProduct);
        }
        // const existingIndex = state.products.find(
        //   (product) => product.id === action.payload.id,
        // );
        // if (!existingIndex) {
        // replace existing product data
        //console.log("product not found, adding");
        // state.products.push({ ...incomingProduct });
        //} else {
        //console.log("product found");
      }
    },
    deleteProduct: (
      state,
      action: PayloadAction<{
        id: number;
      }>,
    ) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );

      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
        localStorage.setItem("cartProducts", JSON.stringify(state.products));
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
    countAddedProduct: (state, action: PayloadAction<cartType>) => {
      const existingIndex = state.products.find(
        (product) => product.id === action.payload.id,
      );
      //console.log("id", action.payload.id);

      //console.log("existingIndex", existingIndex);

      if (!existingIndex) {
        state.counter = (state.counter || 0) + 1;
      }
    },
    countRemovedProduct: (state) => {
      state.counter = (state.counter || 0) - 1;
    },
    processPayment: (state) => {
      // mark processed and clear cart contents (use Immer-style mutations)
      state.processed = true;
      state.products = [];
      state.iconAdded = [];
      state.counter = 0;
    },
    clearProcessed: (state) => {
      state.processed = false;
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
  clearProcessed,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
