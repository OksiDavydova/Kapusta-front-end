import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//useEffect -????
export const getUpdateBalanceUser = createAsyncThunk(
  "user/balance",
  async () => {
    const { data } = await axios.get("/api/v1/transactions/incomesandcosts");
    if (data.length === 0) {
      return { balance: 0 };
    }
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
      { balance: 0, income: 0, expense: 0 }
    );

    return {
      ...balance,
    };
  }
);

export const updateBalanceUserFirst = createAsyncThunk(
  "user/update",
  async (firstTransaction) => {
    try {
      const { data } = await axios.post(
        "/api/v1/transactions",
        firstTransaction
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
