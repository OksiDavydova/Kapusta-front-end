import { createSlice } from '@reduxjs/toolkit';
import {
  signUpUsers,
  loginUsers,
  logoutUsers,
  googleAuthUsers,
} from './operation';

const authSlice = createSlice({
  name: 'user/auth',
  initialState: { isLogin: false },
  reducers: {},
  extraReducers: {
    [signUpUsers.fulfilled]: (state, action) => {
      return (state = { ...action.payload, isLogin: true });
    },
    [loginUsers.fulfilled]: (state, action) => {
      return (state = { ...action.payload, isLogin: true });
    },
    [logoutUsers.fulfilled]: (state, action) => {
      return (state = { ...action.payload, isLogin: false });
    },
  },
});

export default authSlice.reducer;
