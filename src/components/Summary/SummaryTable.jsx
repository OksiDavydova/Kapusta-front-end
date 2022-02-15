import React from "react";
import { useTable } from "react-table";
import {
    SummaryTab,
    SummaryHead,
    SummaryTr,
    SummaryTrBody,
    SummaryTableContainer,
    SummaryBody,
} from "./SummaryStyle.styled";

function SummaryTable() {
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
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    
    });
 
    return (
        <SummaryTableContainer>
            <SummaryTab {...getTableProps()} >
                <SummaryHead>
                    {headerGroups.map(headerGroup => (
                        <SummaryTr{...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <div {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </div>
                            ))}
                        </SummaryTr>
                    ))}
                </SummaryHead>

                <SummaryBody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
          
                        return (
                            <SummaryTrBody {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <div
                                            {...cell.getCellProps()} >
                                            {cell.render('Cell')}
                                        </div>
                                    );
                                })}
                            </SummaryTrBody>
                        );
                    })}
                </SummaryBody>
            </SummaryTab>
        </SummaryTableContainer>
    );
}

export default SummaryTable;
