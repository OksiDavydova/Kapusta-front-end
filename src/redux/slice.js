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
    notifyStatus: {},
  },

  reducers: {},
  extraReducers: {
    [signUpUsers.pending]: state => {
      state.isLoading = true;
    },
    [signUpUsers.fulfilled]: (state, action) => {
      return (state = {
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
      return (state = { ...state, isLoading: true });
    },
    [loginUsers.fulfilled]: (state, action) => {
      return (state = {
        ...action.payload,
        email: action.payload.email,
        isLogin: true,
        isLoading: false,
        notifyStatus: {
          status: "success",
          message: "Вы успешно вошли в свой аккаунт:)",
        },
      });
    },
    [loginUsers.rejected]: (state, action) => {
      return (state = {
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
      return (state = { ...state, isLoading: true });
    },
    [logoutUsers.fulfilled]: (state, action) => {
      return (state = {
        ...action.payload,
        isLogin: false,
        isLoading: false,
        notifyStatus: {
          status: "success",
          message: "Вы успешно вышли со своего аккаунта:)",
        },
      });
    },
    [logoutUsers.rejected]: (state, action) => {
      return (state = {
        isLogin: true,
        error: action.payload,
        isLoading: false,
        notifyStatus: {
          status: "error",
          message: "Выйти из аккаунта не удалось:(",
        },
      });
    },
    [googleAuthUsers.pending]: state => {
      state.isLoading = true;
    },
    [googleAuthUsers.fulfilled]: (state, action) => {
      return (state = {
        ...action.payload,
        isLogin: true,
        isLoading: false,
        notifyStatus: {
          status: "success",
          message: "Вы успешно вошли в свой аккаунт:)",
        },
      });
    },
    [googleAuthUsers.rejected]: state => {
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
