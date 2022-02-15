import { createSlice } from '@reduxjs/toolkit';
import {
  signUpUsers,
  loginUsers,
  logoutUsers,
  googleAuthUsers,
} from './operation';

const authSlice = createSlice({
  name: 'user/auth',
  initialState: { isLogin: false, email: null },
  reducers: {},
  extraReducers: {
    [signUpUsers.fulfilled]: (state, action) => {
      return (state = { ...action.payload, isLogin: true, email: action.payload.email });
    },
    [loginUsers.fulfilled]: (state, action) => {
      return (state = { ...action.payload, isLogin: true });
    },
    [logoutUsers.fulfilled]: (state, action) => {
      return (state = { ...action.payload, isLogin: false });
    },
    [googleAuthUsers.fulfilled]: (state, action) => {
      return (state = { ...action.payload, isLogin: true });
    },
  },
});

export default authSlice.reducer;
