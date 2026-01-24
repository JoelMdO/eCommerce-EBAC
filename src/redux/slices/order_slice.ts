import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import type { OrderType } from "../../types/order_type";

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

const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await api.get("/orders/ ");
  const data = await response.data;
  return data;
});

export const orderSlice = createSlice({
  name: "orderState",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.order = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.order = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch orders";
      });
  },
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;
