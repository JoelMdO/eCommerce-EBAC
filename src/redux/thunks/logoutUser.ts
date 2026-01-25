import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import deleteUserFromLocal from "../../utils/delete_user_fromLocal";

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token")!);
    const response = await api.post(
      "account/logout",
      { refresh: token.refresh },
      {
        headers: { Authorization: "Bearer " + token.access },
      },
    );
    const data = await response.data;
    console.log("data at logut", data);

    if (response.status === 204) {
      deleteUserFromLocal();
    }
    return data;
  } catch (error) {
    console.error("Error in logoutUser thunk:", error);
    throw error;
  }
});
