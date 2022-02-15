import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice";
import userTransaction from "./getTransaction/transaction-slice";
import getBalance from "./getBalance/balance-slice";
import setDate from "./setDate/date-slice";
import typeTransaction from "./typeTransaction/transaction-slice";
import dataDiagram from "./setDataDiagram/dataDiagram-slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    dataTransaction: userTransaction,
    balance: getBalance,
    date: setDate,
    transaction: typeTransaction,
    dataDiagram: dataDiagram,
  },
});

export { store };
