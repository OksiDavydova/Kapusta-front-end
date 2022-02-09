import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'https://api-kapusta.herokuapp.com';
axios.defaults.baseURL = BASE_URL;

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const signUpUsers = createAsyncThunk('users/signUp', async user => {
  console.log('Регистрация', user);
  // const response = await axios.post('/api/v1/auth/signup', user);
  // return response.data.user;
});

export const loginUsers = createAsyncThunk('users/login', async user => {
  console.log('Логин', user);

  // const response = await axios.post('/api/v1/auth/login', user);
  // console.log(response.data.user.token);
  // return response.data.user;
});

export const logoutUsers = createAsyncThunk('users/logout', async () => {
  console.log('Logout');

  // const response = await axios.post('/api/v1/auth/logout');
  // return response;
});

export const googleAuthUsers = createAsyncThunk(
  'users/googleAuth',
  async () => {
    console.log('Google Auth');
    // const response = await axios.post('/api/v1/auth/googlelogin');
    // return response;
  },
);
