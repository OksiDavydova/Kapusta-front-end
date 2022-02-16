import { createSlice } from "@reduxjs/toolkit";
import { getUpdateBalanceUser } from "./balance-operation";

const getBalance = createSlice({
  name: "user/balance",

  initialState: { balance: 0, isLoading: false, notifyStatus: {} },
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
        notifyStatus: {
          status: "success",
          message: `Баланс успешно обновлён:)`,
        },
      });
    },
    [getUpdateBalanceUser.rejected]: state => {
      return (state = {
        ...state,
        isLoading: false,
        notifyStatus: {
          status: "error",
          message: `Баланс обновить не удалось:(`,
        },
      });
    },
  },
});

export default getBalance.reducer;
