import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserTransaction = createAsyncThunk(
  "user/transaction",
  async () => {
    const { data } = await axios.get("/api/v1/transactions/formain");

    const filterDataLastSixMonthsCosts = data.data.lastSixMonthsCosts
      .filter(el => {
        const dataInObject = Object.entries(el);

        if (!dataInObject[0][1]) return null;

        return el;
      })
      .map(el => {
        const dataInObject = Object.entries(el);
        return {
          score0: dataInObject[0][0],
          score1: dataInObject[0][1],
        };
      });

    const filterDataLastSixMonthsIncomes = data.data.lastSixMonthsIncomes
      .filter(el => {
        const dataInObject = Object.entries(el);

        if (!dataInObject[0][1]) return null;
        return el;
      })
      .map(el => {
        const dataInObject = Object.entries(el);
        return {
          score0: dataInObject[0][0],
          score1: dataInObject[0][1],
        };
      });

    const lastSixMonthsTransactionForMobile =
      data.data.lastSixMonthsTransaction.sort((a, b) => b.date - a.date);

    const sortDataLastSixMonthsTransaction = data.data.lastSixMonthsTransaction
      .sort((a, b) => b.date - a.date)
      .reduce(
        (acc, el) => {
          if (el.income) {
            acc.income.push({
              ...el,
            });
            return acc;
          }
          acc.expense.push({
            ...el,
          });
          return acc;
        },
        { income: [], expense: [] },
      );

    return {
      lastSixMonthsCosts: filterDataLastSixMonthsCosts,
      lastSixMonthsIncomes: filterDataLastSixMonthsIncomes,
      lastSixMonthsTransaction: sortDataLastSixMonthsTransaction,
      lastSixMonthsTransactionForMobile,
    };
  },
);
