import { createSlice } from "@reduxjs/toolkit";
import type { OrderType } from "../../types/order_type";
import { setOrders } from "../thunks/setOrder";

interface OrderState {
  order: OrderType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: OrderState = {
  order: [],
  status: "idle",
  error: null,
};

export const orderSlice = createSlice({
  name: "orderState",
  initialState,
  reducers: {
    loadOrders: (state, action) => {
      state.order = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setOrders.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(setOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch orders";
      });
  },
});

export const { loadOrders } = orderSlice.actions;
export default orderSlice.reducer;
