import { createSlice } from "@reduxjs/toolkit";
import { getUpdateBalanceUser } from "./balance-operation";

const getBalance = createSlice({
  name: "user/balance",

  initialState: { balance: 0, isLoading: false },
  reducers: {},
  extraReducers: {
    [getUpdateBalanceUser.pending]: state => {
      return (state = {
        ...state,
        isLoading: true,
      });
    },
    [getUpdateBalanceUser.fulfilled]: (state, actions) => {
      return (state = {
        ...state,
        ...actions.payload,
        isLoading: false,
      });
    },
    [getUpdateBalanceUser.rejected]: state => {
      return (state = {
        ...state,
        isLoading: false,
      });
    },
  },
});

export default getBalance.reducer;
