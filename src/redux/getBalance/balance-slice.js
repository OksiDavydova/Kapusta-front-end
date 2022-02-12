import { createSlice } from "@reduxjs/toolkit";

const getBalance = createSlice({
  name: "user/data",
  initialState: 1,
  reducers: {},
  extraReducers: {},
});

export default getBalance.reducer;
