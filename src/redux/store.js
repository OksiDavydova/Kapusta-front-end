import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice";
import userData from "./userData/userData-slice";
import getBalance from "./getBalance/balance-slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    data: userData,
    balance: getBalance,
  },
});

export { store };
