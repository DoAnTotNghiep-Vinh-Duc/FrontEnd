import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import userAPI from "../api/userAPI";

export const signIn = createAsyncThunk("auth/signin", async (payload) => {
  const response = await userAPI.signInWithWebAccount(payload);

  localStorage.setItem("account", JSON.stringify(response.data.account));
  Cookies.set("token", response.data.accessToken);
  Cookies.set("refreshToken", response.data.refreshToken);
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem("account")),
  },
  reducers: {},
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      state.currentUser = action.payload.data.account;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
