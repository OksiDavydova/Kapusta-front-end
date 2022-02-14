import React from "react";
// import { useSelector } from "react-redux";
// import { getArrayDataUser } from "../../redux/userData/userData-selector";
import { SvgIcon } from "../SvgIcon";
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

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "16px",
          color: "white",
          backgroundColor: "orange",
        },
      },
    },
  },
});

function TransactionTable() {
  // const arrayDataUser = useSelector(getArrayDataUser);
  const btnDel = () => (
    <button type="button" style={{ border: "none" }}>
      <SvgIcon w={16} h={16} idIcon={"#icon-delete"} />
    </button>
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Дата",
        accessor: "day",
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
        accessor: "sum",
      },
      {
        Header: "",
        accessor: "del",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        day: "11.10.2021",
        description: "Banana Montana",
        category: "Products",
        sum: "- 30.00 грн",
        del: btnDel(),
      },
      {
        day: "11.10.2021",
        description: "Banana Banana Banana Banana ",
        category: "Products",
        sum: "- 30.00 грн",
        del: btnDel(),
      },
      {
        day: "11.10.2021",
        description: "Banana",
        category: "Products",
        sum: "- 30.00 грн",
        del: btnDel(),
      },
      {
        day: "",
        description: "",
        category: "",
        sum: "",
        del: "",
      },
      {
        day: "",
        description: "",
        category: "",
        sum: "",
        del: "",
      },
      {
        day: "",
        description: "",
        category: "",
        sum: "",
        del: "",
      },
      {
        day: "",
        description: "",
        category: "",
        sum: "",
        del: "",
      },
      {
        day: "",
        description: "",
        category: "",
        sum: "",
        del: "",
      },
      {
        day: "",
        description: "",
        category: "",
        sum: "",
        del: "",
      },
      {
        day: "",
        description: "",
        category: "",
        sum: "",
        del: "",
      },
      {
        day: "",
        description: "",
        category: "",
        sum: "",
        del: "",
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ data, columns });

  return (
    <TransactionSection>
      <TableTransaction {...getTableProps()}>
        <TableHeadTransaction>
          {headerGroups.map((headerGroup) => (
            <TrHeadTransaction {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <ThHeadTransaction {...column.getHeaderProps()}>
                  {column.render("Header")}
                </ThHeadTransaction>
              ))}
            </TrHeadTransaction>
          ))}
        </TableHeadTransaction>

        <TableBodyTransaction {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);

            return (
              <TrBodyTransaction {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const currentDesc = cell.value;
                  return (
                    <ThemeProvider theme={theme}>
                      <Tooltip title={currentDesc}>
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
