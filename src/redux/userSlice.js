import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import userAPI from "../api/userAPI";

export const signIn = createAsyncThunk("user/signin", async (payload) => {
  // const response = await userAPI.signInWithWebAccount({
  //   email: payload.email,
  //   password: payload.password,
  // });

  // localStorage.setItem("account", JSON.stringify(response.data.account));
  // Cookies.set("token", response.data.accessToken);
  // Cookies.set("refreshToken", response.data.refreshToken);
  // return response

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    email: payload.email,
    password: payload.password,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const res = fetch("http://localhost:5000/auth/signin", requestOptions);

  return res
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      // localStorage.setItem("account", JSON.stringify(result.account));
      // Cookies.set("token", result.accessToken);
      // Cookies.set("refreshToken", result.refreshToken);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
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
