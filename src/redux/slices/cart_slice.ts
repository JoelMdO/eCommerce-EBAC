import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { cartType } from "../../types/cart_type";
import loadCartFromLocalStorage from "../../utils/load_cart_fromLocal";
import saveCartToLocalStorage from "../../utils/save_cart_toLocal";
import deleteCartFromLocalStorage from "../../utils/delete_cart_fromLocal";
export interface cartState {
  products: cartType[];
  iconAdded?: number[];
  counter?: number;
  processed?: boolean;
}

const initialState: cartState = {
  products: loadCartFromLocalStorage().products,
  iconAdded: [],
  counter: loadCartFromLocalStorage().counter,
  processed: false,
};

// Create a slice for guides
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<cartType>) => {
      const incomingProduct = action.payload;
      const existingIndex = state.products.find(
        (product) => product.id === action.payload.id,
      );
      if (!existingIndex) {
        // replace existing product data
        state.products.push({ ...incomingProduct });
        state.counter = (state.counter || 0) + 1;
        saveCartToLocalStorage(state.products[state.products.length - 1]);
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
        state.counter = state.counter! - 1;
        deleteCartFromLocalStorage(state.products);
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
    countRemovedProduct: (state) => {
      state.counter = (state.counter || 0) - 1;
    },
    clearCartAfterOrder: (state) => {
      state.products = [];
      state.iconAdded = [];
      state.counter = 0;
    },
    // processPayment: (state) => {
    //   // mark processed and clear cart contents (use Immer-style mutations)
    //   state.processed = true;
    //   state.products = [];
    //   state.iconAdded = [];
    //   state.counter = 0;
    // },
    // clearProcessed: (state) => {
    //   state.processed = false;
    // },
  },
});

// Export actions
export const {
  addProduct,
  deleteProduct,
  changeIconToAdded,
  removedIconToAdded,
  countRemovedProduct,
  clearCartAfterOrder,
  // processPayment,
  //clearProcessed,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
