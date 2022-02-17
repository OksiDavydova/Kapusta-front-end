import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CATEGORIES_FOR_SELECT } from "../../const/constants";

export const getDataForDiagram = createAsyncThunk(
  "user/transactionForDiagram",
  async date => {
    // const { data } = await axios.get("/api/v1/transactions/sorted");
    const response = await axios.get(`/api/v1/transactions/forreport/${date}`);

    if (response.data.data.transactionsByDescription.length === 0) return false;

    const data = response.data.data.transactionsByDescription;

    const expense = CATEGORIES_FOR_SELECT[0].expense.reduce((acc, el) => {
      let total = 0;
      const newObj = {
        category: el,
        data: [],
      };
      data.map((e, ind) => {
        if (e._id.category === el) {
          total += e.totalDescription;
          newObj.data.push({
            id: ind,
            name: e._id.description,
            value: e.totalDescription,
            expense: e._id.income,
          });
        }
        return null;
      });
      if (newObj.data.length === 0) return acc;

      acc.push({ total, ...newObj });
      return acc;
    }, []);

    const income = CATEGORIES_FOR_SELECT[1].income.reduce((acc, el) => {
      let total = 0;
      const newObj = {
        category: el,
        data: [],
      };
      data.map((e, ind) => {
        if (e._id.category === el) {
          total += e.totalDescription;
          newObj.data.push({
            id: ind,
            name: e._id.description,
            value: e.totalDescription,
            expense: e._id.income,
          });
        }
        return null;
      });
      if (newObj.data.length === 0) return acc;

      acc.push({ total, ...newObj });
      return acc;
    }, []);

    const sortIncome = [...income].sort((a, b) => b.total - a.total);
    const sortExpense = [...expense].sort((a, b) => b.total - a.total);

    const newData = {
      income: sortIncome,
      expense: sortExpense,
      sumOfExpense: response.data.data.sumOfCosts.toLocaleString(),
      sumOfIncome: response.data.data.sumOfIncomes.toLocaleString(),
    };

    return newData;
  },
);
