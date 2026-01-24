import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserData } from "../../types/form_type";
import api from "../../api/api";

export const createUser = createAsyncThunk(
  "signup/createUser",
  async (newUser: UserData) => {
    const response = await api.post("/account/register", newUser);
    const data = await response.data;
    console.log("data", data);

    if (data) {
      localStorage.setItem("token", JSON.stringify(data));
    }
    return data;
  },
);
