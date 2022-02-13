import { createSlice } from "@reduxjs/toolkit";
import { getUpdateBalanceUser } from "./balance-operation";

const getBalance = createSlice({
  name: "user/balance",

  initialState: { balance: 0 },
  reducers: {},
  extraReducers: {
    [getUpdateBalanceUser.fulfilled]: (state, actions) => {
      console.log(actions);
      return (state = { ...state, ...actions.payload });
    },
  },
});

export default getBalance.reducer;
