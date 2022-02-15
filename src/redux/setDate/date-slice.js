import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns"; //parseISO

const initialState = format(new Date(), "yyyy/MM/dd");

const setDate = createSlice({
  name: "newDate",
  initialState,
  reducers: {
    setDateNow: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { setDateNow } = setDate.actions;

export default setDate.reducer;
