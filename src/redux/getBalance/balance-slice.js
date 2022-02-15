import { createSlice } from "@reduxjs/toolkit";
import {
  getUpdateBalanceUser,
  updateBalanceUserFirst,
} from "./balance-operation";

const getBalance = createSlice({
  name: "user/balance",

  initialState: { balance: 0, isError: "" },
  reducers: {},
  extraReducers: {
    [getUpdateBalanceUser.fulfilled]: (state, actions) => {
      console.log(actions);
      return (state = { ...state, ...actions.payload });
    },
    [updateBalanceUserFirst.fulfilled]: (state, action) => {
      return (state.balance = { ...state, ...action.payload });
    },
    [updateBalanceUserFirst.rejected]: (state, action) => {
      return (state.isError = action.payload);
    },
  },
});

export default getBalance.reducer;
