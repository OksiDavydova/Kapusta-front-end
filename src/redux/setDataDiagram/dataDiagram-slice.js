import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { getDataForDiagram } from "./dataDiagram-operation";

const dataForDiagram = createSlice({
  name: "dataForDiagram",
  initialState: { data: false, isLoading: false },
  reducers: {},
  extraReducers: {
    [getDataForDiagram.pending]: state => {
      return (state = { ...state, isLoading: true });
    },
    [getDataForDiagram.fulfilled]: (state, action) => {
      if (!action.payload) {
        return (state = {
          data: false,
          isLoading: false,
        });
      }
      return (state = {
        data: { ...action.payload },
        isLoading: false,
      });
    },
    [getDataForDiagram.rejected]: state => {
      return (state = {
        ...state,
        isLoading: false,
      });
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
    sortDataForDiagram: (_, { payload }) => {
      if (payload.length === 0) return [];
      if (!payload.bull) {
        const array = payload.data.expense.find(el => {
          return el.category === payload.category;
        });
        return [...array.data].sort((a, b) => b.value - a.value);
      } else {
        const array = payload.data.income.find(el => {
          return el.category === payload.category;
        });
        return [...array.data].sort((a, b) => b.value - a.value);
      }
    },
  },
});

const dataDiagram = combineReducers({
  data: dataForDiagram.reducer,
  bull: changePageDiagram.reducer,
  dataForDiagram: sortData.reducer,
});

const { changeDiagram } = changePageDiagram.actions;
const { sortDataForDiagram } = sortData.actions;
export { changeDiagram, sortDataForDiagram };

export default dataDiagram;
