import { createSlice } from "@reduxjs/toolkit";
import {
  signUpUsers,
  loginUsers,
  logoutUsers,
  googleAuthUsers,
} from "./operation";

const authSlice = createSlice({
  name: "user/auth",
  initialState: { isLogin: false, error: null, email: "" },
  reducers: {},
  extraReducers: {
    [signUpUsers.fulfilled]: (state, action) => {
      return (state = { ...action.payload, isLogin: true });
    },
    [signUpUsers.rejected]: (state, action) => {
      return (state = { isLogin: false, error: action.payload });
    },
    [loginUsers.fulfilled]: (state, action) => {
      return (state = {
        ...action.payload,
        email: action.payload.email,
        isLogin: true,
      });
    },
    [loginUsers.rejected]: (state, action) => {
      return (state = { isLogin: false, error: action.payload });
    },
    [logoutUsers.fulfilled]: (state, action) => {
      return (state = { ...action.payload, isLogin: false });
    },
    [logoutUsers.rejected]: (state, action) => {
      return (state = { isLogin: true, error: action.payload });
    },
    [googleAuthUsers.fulfilled]: (state, action) => {
      return (state = { ...action.payload, isLogin: true });
    },
  },
});

export default authSlice.reducer;
