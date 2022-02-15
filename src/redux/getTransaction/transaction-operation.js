import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SvgIcon } from "../../components/SvgIcon";

const deleteTransaction = id => {
  console.log(id);
};

const btnDel = id => (
  <button
    type="button"
    style={{ border: "none" }}
    onClick={() => deleteTransaction(id)}
  >
    <SvgIcon w={16} h={16} idIcon={"#icon-delete"} />
  </button>
);

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

    const sortDataLastSixMonthsTransaction = data.data.lastSixMonthsTransaction
      .sort((a, b) => b.date - a.date)
      .reduce(
        (acc, el) => {
          if (el.income) {
            acc.income.push({
              ...el,
              _id: btnDel(el._id),
            });
            return acc;
          }
          acc.expense.push({
            ...el,
            _id: btnDel(el._id),
          });
          return acc;
        },
        { income: [], expense: [] },
      );

    return {
      lastSixMonthsCosts: filterDataLastSixMonthsCosts,
      lastSixMonthsIncomes: filterDataLastSixMonthsIncomes,
      lastSixMonthsTransaction: sortDataLastSixMonthsTransaction,
    };
  },
);
