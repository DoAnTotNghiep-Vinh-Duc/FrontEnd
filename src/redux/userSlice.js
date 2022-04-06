import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import userAPI from "../api/userAPI";

export const signIn = createAsyncThunk("auth/signin", async (payload) => {
  const response = await userAPI.signInWithWebAccount(payload);
  console.log(response);
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
      state.currentUser = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
