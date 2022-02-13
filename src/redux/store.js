import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice";
import userData from "./userData/userData-slice";
import getBalance from "./getBalance/balance-slice";
import setDate from "./setDate/date-slice";
import typeTransaction from "./typeTransaction/transaction-slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    data: userData,
    balance: getBalance,
    date: setDate,
    transaction: typeTransaction,
  },
});

export { store };
