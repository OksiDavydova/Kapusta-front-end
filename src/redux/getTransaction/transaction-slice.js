import { createSlice } from "@reduxjs/toolkit";
import { getUserTransaction } from "./transaction-operation";

const userTransaction = createSlice({
  name: "user/transaction",
  initialState: { data: false, isLoading: false, notifyStatus: {} },
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
        notifyStatus: {
          status: "success",
          message: `Ваши транзакции успешно обновлены:)`,
        },
      });
    },
    [getUserTransaction.rejected]: state => {
      return (state = {
        ...state,
        isLoading: false,
        notifyStatus: {
          status: "error",
          message: `Обновить транзакции не удалось:()`,
        },
      });
    },
  },
});

export default userTransaction.reducer;
