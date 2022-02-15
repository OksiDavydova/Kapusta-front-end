import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUpdateBalanceUser = createAsyncThunk(
  "user/balance",
  async () => {
    const { data } = await axios.get("/api/v1/transactions/incomesandcosts");

    const balance = data.data.reduce(
      (acc, el) => {
        if (el.income) {
          acc.income = el.total;
          acc.balance += el.total;
          return acc;
        }
        if (!el.income) {
          acc.expense = el.total;
          acc.balance -= el.total;
          return acc;
        }
        return acc;
      },
      { balance: 0, income: 0, expense: 0 },
    );

    return {
      ...balance,
    };
  },
);
