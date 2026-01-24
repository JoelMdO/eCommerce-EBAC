import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserData } from "../../types/form_type";
import api from "../../api/api";

export const fetchUser = createAsyncThunk(
  "signup/fetchUser",
  async (user: Partial<UserData>) => {
    const response = await api.post(`/account/login`, user);
    const data = await response.data;
    return data;
  },
);
