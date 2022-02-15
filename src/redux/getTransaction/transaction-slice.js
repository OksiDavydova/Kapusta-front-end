import { createSlice } from "@reduxjs/toolkit";
import { getUserTransaction } from "./transaction-operation";

const userTransaction = createSlice({
  name: "user/transaction",
  initialState: false,
  reducers: {},
  extraReducers: {
    [getUserTransaction.fulfilled]: (state, action) => {
      return (state = { ...action.payload });
    },
  },
});

export default userTransaction.reducer;
