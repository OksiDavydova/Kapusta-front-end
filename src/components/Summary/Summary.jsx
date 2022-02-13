import React from "react";
import { Table } from "../TransactionTable";
import { SummaryTable } from "./SummaryStyle.styled";
import { colors } from "../../styles/utils";

function SummaryLib() {
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
    []
  );

  const data = React.useMemo(
    () => [
      {
        score0: "November",
        score1: "5 000.00",
      },
      {
        score0: "December",
        score1: "20 000.00",
      },
      {
        score0: "January",
        score1: "10 000.00",
      },
      {
        score0: "February",
        score1: "90 000.00",
      },
      {
        score0: "March",
        score1: "70 000.00",
      },
      {
        score0: "April",
        score1: "40 000.00",
      },
    ],
    []
  );

  return (
    <>
      <style>
        {`
        .summaryContainer {
            padding-top: 40px;     
              border-radius: 20px 20px 20px 0;
              max-width: 300px;

        }
        .thead {
              text-align: center;
              display: inline-block;
              padding-top: 10px;
              margin-bottom: 0;
              font-weight: 700;
              font-size: 12px;
              line-height: 1.16;
              height: 38px;
              letter-spacing: 0.02em;
              text-transform: uppercase;
        }
        .tr{
            background-color: ${colors.bgSummary};
              border-bottom: 2px solid ${colors.white};
              display: table-row-group;
              height: 38px;
        }
  
      `}
      </style>

      <SummaryTable className="summaryContainer">
        <Table
          columns={columns}
          data={data}
          getHeaderProps={(row) => ({ className: "thead" })}
          getRowProps={(row) => ({ className: "tr" })}
        />
      </SummaryTable>
    </>
  );
}
export default SummaryLib;
