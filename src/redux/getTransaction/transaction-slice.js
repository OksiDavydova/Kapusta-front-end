import { createSlice } from "@reduxjs/toolkit";
import { getUserTransaction } from "./transaction-operation";

const userTransaction = createSlice({
  name: "user/transaction",
  initialState: { data: false, isLoading: false },
  reducers: {},
  extraReducers: {
    [getUserTransaction.pending]: state => {
      return (state = { ...state, isLoading: true });
    },
    [getUserTransaction.fulfilled]: (state, action) => {
      return (state = {
        data: {
          ...action.payload,
        },
        isLoading: false,
      });
    },
    [getUserTransaction.rejected]: state => {
      return (state = {
        ...state,
        isLoading: false,
      });
    },
  },
});

export default userTransaction.reducer;
