import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import type { OrderType } from "../../types/order_type";

export const setOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (payload: OrderType) => {
    try {
      const response = await api.post("/orders/ ", payload.order, {
        headers: { Authorization: "Bearer " + payload.token },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      console.error("Error in setOrders thunk:", error);
      throw error;
    }
  },
);
