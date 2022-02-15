import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUpdateBalanceUser = createAsyncThunk(
  "user/balance",
  async () => {
    const { data } = await axios.get("/api/v1/transactions/incomesandcosts");

    const balance = data.data.reduce((acc, el) => {
      if (el.income) return (acc += el.total);
      if (!el.income) return (acc -= el.total);
    }, 0);

    return {
      balance,
      ...data.data,
    };
  }
);
