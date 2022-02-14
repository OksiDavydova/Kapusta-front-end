import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { getDataForDiagram } from "./dataDiagram-operation";

const dataForDiagram = createSlice({
  name: "dataForDiagram",
  initialState: {},
  reducers: {},
  extraReducers: {
    [getDataForDiagram.fulfilled]: (state, action) => {
      return (state = { ...action.payload });
    },
  },
});

const changePageDiagram = createSlice({
  name: "changeDiagram",
  initialState: false,
  reducers: {
    changeDiagram: (state, action) => {
      return (state = action.payload);
    },
  },
});

const sortData = createSlice({
  name: "sortData",
  initialState: [],
  reducers: {
    sortDataForDiagram: (state, { payload }) => {
      if (!payload.bull) {
        const array = payload.data.expense.find(el => {
          return el.category === payload.category;
        });
        return array.data;
      } else {
        const array = payload.data.income.find(el => {
          return el.category === payload.category;
        });
        return array.data;
      }
    },
  },
});

const dataDiagram = combineReducers({
  data: dataForDiagram.reducer,
  bull: changePageDiagram.reducer,
  dataForDiagram: sortData.reducer,
});

export default dataDiagram;
