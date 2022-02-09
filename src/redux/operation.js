import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api-kapusta.herokuapp.com';
axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUpUsers = createAsyncThunk('users/signUp', async user => {
  const { data } = await axios.post('/api/v1/auth/signup', user);
  token.set(data.user.token);
  return data.user;
});

export const loginUsers = createAsyncThunk('users/login', async user => {
  const { data } = await axios.post('/api/v1/auth/login', user);
  token.set(data.user.token);
  return data.user;
});

export const logoutUsers = createAsyncThunk('users/logout', async () => {
  await axios.post('/api/v1/auth/logout');
  token.unset();
  return;
});

export const googleAuthUsers = createAsyncThunk(
  'users/googleAuth',
  async () => {
    console.log('Google Auth');
    // const response = await axios.post('/api/v1/auth/googlelogin');
    // return response;
  },
);
