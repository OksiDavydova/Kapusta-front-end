import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../const/constants";

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("token", token);
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
    localStorage.setItem("token", "");
  },
};

export const signUpUsers = createAsyncThunk(
  "users/signUp",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/v1/auth/signup", user);
      return data.user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const loginUsers = createAsyncThunk(
  "users/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/v1/auth/login", user);
      token.set(data.user.token);
      return data.user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const logoutUsers = createAsyncThunk(
  "users/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/api/v1/auth/logout");
      token.unset();
      return;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const googleAuthUsers = createAsyncThunk(
  "users/current",
  async userToken => {
    token.set(userToken);
    const { data } = await axios.get("api/v1/users/current");
    return data.user;
  },
);
