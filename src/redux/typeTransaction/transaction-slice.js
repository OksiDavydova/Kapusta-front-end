import { createSlice } from "@reduxjs/toolkit";

const typeTransaction = createSlice({
  name: "typeTransaction",
  initialState: false,
  reducers: {
    changeTypeTransaction: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { changeTypeTransaction } = typeTransaction.actions;

export default typeTransaction.reducer;
