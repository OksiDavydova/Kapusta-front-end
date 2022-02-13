import React from "react";
import Media from "react-media";
// import { useSelector } from "react-redux";
// import { getArrayDataUser } from "../../redux/userData/userData-selector";
import { Table } from ".";
import { SvgIcon } from "../SvgIcon";
import { TransactionSection } from "./TransactionTableStyle.styled";
import { Scrollbars } from "react-custom-scrollbars-2";

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

  return (
    <TransactionSection>
      <Media
        query="(min-width: 320px) and (max-width: 767px)"
        render={() => (
          <Scrollbars style={{ width: 282, height: 142 }}>
            <Table columns={columns} data={data} />
          </Scrollbars>
        )}
      />
      <Media
        query="(min-width: 768px) and (max-width: 1279px)"
        render={() => (
          <Scrollbars style={{ width: 605, height: 384 }}>
            <Table columns={columns} data={data} />
          </Scrollbars>
        )}
      />

      <Media
        query="(min-width: 1280px)"
        render={() => (
          <Scrollbars style={{ width: 760, height: 384 }}>
            <Table columns={columns} data={data} />
          </Scrollbars>
        )}
      />
    </TransactionSection>
  );
}
export default TransactionTable;
