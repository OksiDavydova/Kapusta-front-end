import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import { SvgIcon } from "../SvgIcon";
import { useTable } from "react-table";
import { Tooltip, createTheme, ThemeProvider } from "@mui/material";
import {
  TableBodyTransaction,
  TableHeadTransaction,
  TableTransaction,
  ThHeadTransaction,
  TransactionSection,
  TrHeadTransaction,
  TrBodyTransaction,
  TdBodyTransaction,
} from "./TransactionTableStyle.styled";
import { SvgIcon } from "../SvgIcon";
import { getUserTransaction } from "../../redux/getTransaction/transaction-operation";
import { getUserTransactionTheLastSixMounts } from "../../redux/getTransaction/transaction-selector";
import { getTypeTransaction } from "../../redux/typeTransaction/transaction-selector";
import { getUpdateBalanceUser } from "../../redux/getBalance/balance-operation";
import { getBalanceUser } from "../../redux/getBalance/balance-selector";

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "10px",
          color: "white",
          backgroundColor: "orange",
        },
      },
    },
  },
});

function TransactionTable() {
  const arrayDataUser = useSelector(getUserTransactionTheLastSixMounts);
  const bull = useSelector(getTypeTransaction);
  const userBalance = useSelector(getBalanceUser);
  const dispatch = useDispatch();

  const columns = React.useMemo(
    () => [
      {
        Header: "Дата",
        accessor: "date",
      },
      {
        Header: "Описание",
        accessor: "description",
      },
      {
        Header: "Категория",
        accessor: "category",
      },
      {
        Header: "Сумма",
        accessor: "value",
      },
      {
        Header: "",
        accessor: "_id",
      },
    ],
    [],
  );

  const data = React.useMemo(
    () =>
      arrayDataUser
        ? bull
          ? arrayDataUser.lastSixMonthsTransaction.income
          : arrayDataUser.lastSixMonthsTransaction.expense
        : [],
    [bull, arrayDataUser],
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ data, columns });

  const deleteTransaction = async ({ id, value }) => {
    if (userBalance - value < 0) {
      toast.error(
        "Данная операция невозможна! Баланс не может быть отрицательным!",
      );
      return;
    }
    const response = await axios.delete(`/api/v1/transactions/${id}`);
    console.log(response);
    if (response.status === 200) {
      dispatch(getUserTransaction());
      dispatch(getUpdateBalanceUser());
    }
    return;
  };

  const btnDel = ({ id, value }) => (
    <button
      type="button"
      style={{ border: "none" }}
      onClick={() => deleteTransaction({ id, value })}
    >
      <SvgIcon w={16} h={16} idIcon={"#icon-delete"} />
    </button>
  );

  return (
    <TransactionSection>
      <TableTransaction {...getTableProps()}>
        <TableHeadTransaction>
          {headerGroups.map((headerGroup, i) => (
            <TrHeadTransaction key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <ThHeadTransaction key={i} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </ThHeadTransaction>
              ))}
            </TrHeadTransaction>
          ))}
        </TableHeadTransaction>

        <TableBodyTransaction {...getTableBodyProps()}>
          {rows.map((row, i) => {
            row.values._id = btnDel({
              id: row.values._id,
              value: row.values.value,
            });
            prepareRow(row);

            return (
              <TrBodyTransaction {...row.getRowProps()} key={i}>
                {row.cells.map((cell, i) => {
                  const currentDesc = cell.value;
                  return (
                    <ThemeProvider theme={theme} key={i}>
                      <Tooltip title={currentDesc} placement="right">
                        <TdBodyTransaction {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </TdBodyTransaction>
                      </Tooltip>
                    </ThemeProvider>
                  );
                })}
              </TrBodyTransaction>
            );
          })}
        </TableBodyTransaction>
      </TableTransaction>
    </TransactionSection>
  );
}

export default TransactionTable;
