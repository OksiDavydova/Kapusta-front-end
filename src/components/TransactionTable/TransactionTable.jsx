import React from "react";
import {Table  }from ".";
import { SvgIcon } from '../SvgIcon';
import {
    TransactionSection,
} from "./TransactionTableStyle.styled";


function TransactionTable() {
    
    const btnDel = () => (
    <SvgIcon w={16} h={16}
      idIcon={"#icon-delete"} />)
  
  const columns = React.useMemo(
      () => [
        {
         Header: 'Дата',
         accessor: 'day',
       },
       {
         Header: 'Описание',
         accessor: 'description',
       },
       {
         Header: 'Категория',
         accessor: 'category',
         },
        {
         Header: 'Сумма',
          accessor: 'sum',
         },
        {
         Header: '',
          accessor: 'del',
       },
    ],
    []
  )

 
    const data = React.useMemo(
        () => [
            {
                day: '11.10.2021',
                description: 'Banana',
                category: 'Products',
                sum: '- 30.00 грн',
                del: btnDel(),
            
            },
            {
                day: '11.10.2021',
                description: 'Banana',
                category: 'Products',
                sum: '- 30.00 грн',
                del: btnDel(),
            },
            {
                day: '11.10.2021',
                description: 'Banana',
                category: 'Products',
                sum: '- 30.00 грн',
                del: btnDel(),
            },
            {
                day: '',
                description: '',
                category: '',
                sum: '',
                del: '',
            },
            {
                day: '',
                description: '',
                category: '',
                sum: '',
                del: '',
            },
            {
                day: '',
                description: '',
                category: '',
                sum: '',
                del: '',
            },
            {
                day: '',
                description: '',
                category: '',
                sum: '',
                del: '',
            },
     ],
     []
 )

  return (
    <TransactionSection>
      <Table
        columns={columns}
              data={data}    
      />
   </TransactionSection>
  );
}
export default TransactionTable;