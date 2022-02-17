import { createSlice } from "@reduxjs/toolkit";
import {
  signUpUsers,
  loginUsers,
  logoutUsers,
  googleAuthUsers,
} from "./operation";

const authSlice = createSlice({
  name: "user/auth",
  initialState: {
    isLogin: false,
    error: null,
    email: "",
    isLoading: false,
    isVerify: false,
    notifyStatus: {},
  },

  reducers: {},
  extraReducers: {
    [signUpUsers.pending]: state => {
      state.isLoading = true;
    },
    [signUpUsers.fulfilled]: (state, action) => {
      return (state = {
        ...state,
        ...action.payload,
        email: action.payload.email,
        isLoading: false,
        notifyStatus: {
          status: "success",
          message: `Регистрация прошла успешно! Подтвердите свой email ${action.payload.email}:)`,
        },
      });
    },
    [signUpUsers.rejected]: (state, action) => {
      return (state = {
        ...state,
        isLogin: false,
        error: action.payload,
        isLoading: false,
        notifyStatus: {
          state: "error",
          message: `${action.payload}`,
        },
      });
    },
    [loginUsers.pending]: state => {
      state.isLoading = true;
    },
    [loginUsers.fulfilled]: (state, action) => {
      return (state = {
        ...state,
        ...action.payload,
        email: action.payload.email,
        isLogin: true,
        isLoading: false,
      });
    },
    [loginUsers.rejected]: (state, action) => {
      return (state = {
        ...state,
        isLogin: false,
        error: action.payload,
        isLoading: false,
        notifyStatus: {
          status: "error",
          message: "Войти в аккаунт не удалось:(",
        },
      });
    },
    [logoutUsers.pending]: state => {
      state.isLoading = true;
    },
    [logoutUsers.fulfilled]: (state, action) => {
      return (state = {
        ...state,
        ...action.payload,
        isLogin: false,
        isLoading: false,
        isVerify: false,
      });
    },
    [logoutUsers.rejected]: (state, action) => {
      return (state = {
        ...state,
        isLogin: false,
        error: action.payload,
        isLoading: false,
        isVerify: false,
      });
    },
    [googleAuthUsers.pending]: state => {
      state.isLoading = true;
    },
    [googleAuthUsers.fulfilled]: (state, action) => {
      return (state = {
        ...state,
        ...action.payload,
        isLogin: true,
        isLoading: false,
        isVerify: true,
      });
    },
    [googleAuthUsers.rejected]: state => {
      localStorage.setItem("token", "");
      return (state = {
        ...state,
        isLoading: false,
        notifyStatus: {
          status: "error",
          message: "Войти в аккаунт не удалось:(",
        },
      });
    },
  },
});

export default authSlice.reducer;
