import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUpdateBalanceUser = createAsyncThunk(
  "user/balance",
  async () => {
    const response = await axios.get("/api/v1/transactions/incomesandcosts");
    console.log(response);
    //   return response.data.data;
  },
);
