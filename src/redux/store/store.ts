import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../slices/cart_slice";
import openReducer from "../slices/open_slice";
import { productsSlice } from "../slices/products_slice";
import { orderSlice } from "../slices/order_slice";
import { signUpSlice } from "../slices/signup_slice";
// Configure the store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    openState: openReducer,
    products: productsSlice.reducer,
    order: orderSlice.reducer,
    signup: signUpSlice.reducer,
  },
});

// Export the store and types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
