import React from "react";
import { useSelector } from "react-redux";
import { useTable } from "react-table";
import {
  SummaryTab,
  SummaryHead,
  SummaryTr,
  SummaryTrBody,
  SummaryTableContainer,
} from "./SummaryStyle.styled";
import { getUserTransactionTheLastSixMounts } from "../../redux/getTransaction/transaction-selector.js";
import { getTypeTransaction } from "../../redux/typeTransaction/transaction-selector.js";
import { NoResult } from '../CategoryReportList/NoResult';

function SummaryTable() {
  const transaction = useSelector(getUserTransactionTheLastSixMounts);
  const bull = useSelector(getTypeTransaction);

  const columns = React.useMemo(
    () => [
      {
        Header: "Сводка",

        columns: [
          {
            accessor: "score0",
          },
          {
            accessor: "score1",
            style: {
              maxWidth: "188px",
            },
          },
        ],
      },
    ],
    [],
  );

  const data = React.useMemo(
    () =>
      transaction
        ? bull
          ? transaction.lastSixMonthsIncomes
          : transaction.lastSixMonthsCosts
        : [],
    [bull, transaction],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });


  return (
    <SummaryTableContainer>
      <SummaryTab {...getTableProps()}>
        <SummaryHead>
          {headerGroups.map(headerGroup => (
            <SummaryTr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <div {...column.getHeaderProps()}>
                  {column.render("Header")}
                </div>
              ))}
            </SummaryTr>
          ))}
        </SummaryHead>
        {data.length > 0 ? (
   <div {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);

            return (
              <SummaryTrBody {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <div {...cell.getCellProps()}>{cell.render("Cell")}</div>
                  );
                })}
              </SummaryTrBody>
            );
          })}
        </div>
): <NoResult/>}
       
      </SummaryTab>
    </SummaryTableContainer>
  );


}

export default SummaryTable;
