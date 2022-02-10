import React from "react";
import {Table} from "../TransactionTable";
import {
    SummaryTable,
    
} from "./SummaryStyle.styled";


function SummaryLib() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Сводка',
        columns: [
          {
            accessor: 'score0',
            
          },
          {
            accessor: 'score1',
          },
          
        ],
      },
    ],
    []
  )

 
    const data = React.useMemo(
     () => [
       {
         score0: 'November',
         score1: '5 000.00',
            },
         {
         score0: 'December',
         score1: '20 000.00',
            },
         {
         score0: 'January',
         score1: '10 000.00',
            },
         {
         score0: 'February',
         score1: '90 000.00',
            },
         {
         score0: 'March',
         score1: '70 000.00',
            },
              {
         score0: 'April',
         score1: '40 000.00',
            },
 
     ],
     []
 )

    return (

    <SummaryTable>
      <Table
        columns={columns}
        data={data}
    
      />
    </SummaryTable>
  );
}
export default SummaryLib;
