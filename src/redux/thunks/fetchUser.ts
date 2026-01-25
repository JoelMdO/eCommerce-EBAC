import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserData } from "../../types/form_type";
import api from "../../api/api";

export const fetchUser = createAsyncThunk(
  "signup/fetchUser",
  async (user: Partial<UserData>) => {
    const response = await api.post(`/account/login`, user);
    const data = await response.data;
    const token_info = localStorage.getItem("token");
    console.log("data", data);

    //Check if token exists in localStorage
    if (token_info) {
      const parsed_info = JSON.parse(localStorage.getItem("token")!);
      parsed_info.token = JSON.stringify(data.token);
    } else {
      localStorage.setItem("token", JSON.stringify(data.token));
    }
    //Check if user exists in localStorage
    const user_info = localStorage.getItem("username");
    if (user_info) {
      const parsed_info = JSON.parse(localStorage.getItem("username")!);
      parsed_info.token = JSON.stringify(data.username);
    } else {
      localStorage.setItem("username", JSON.stringify(data.username));
    }
    return data;
  },
);
