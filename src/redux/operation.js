import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../const/constants";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDkwMTQ4YjYyZjdlMWQ0NDQ5NTM5ZCIsImlhdCI6MTY0NDc1NzMyMCwiZXhwIjoxNjQ0ODI5MzIwfQ.CL6ASl9b_rI-0tc2VfU2ZzIwPbI8Pf-GkL_bz37M5T0`;
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signUpUsers = createAsyncThunk("users/signUp", async user => {
  const { data } = await axios.post("/api/v1/auth/signup", user);
  // token.set(data.user.token);
  return data.user;
});

export const loginUsers = createAsyncThunk("users/login", async user => {
  const { data } = await axios.post("/api/v1/auth/login", user);
  // token.set(data.user.token);
  return data.user;
});

export const logoutUsers = createAsyncThunk("users/logout", async () => {
  await axios.post("/api/v1/auth/logout");
  // token.unset();
  return;
});

export const googleAuthUsers = createAsyncThunk(
  "users/current",
  async userToken => {
    // token.set(userToken);
    const { data } = await axios.get("api/v1/users/current");
    return data.user;
  },
);
