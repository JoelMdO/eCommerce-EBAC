import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../slices/cart_slice";
import openReducer from "../slices/open_slice";
// Configure the store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    openState: openReducer,
  },
});

// Export the store and types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
