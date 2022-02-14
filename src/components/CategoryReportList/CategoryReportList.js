import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Card } from "./Card";
import { CategoryList, CategoryListWrapper } from "./CategoryStyled";
import { CashPicker } from "./CashPicker";
import {
  getDataForInput,
  getBullForChangePage,
} from "../../redux/setDataDiagram/dataDiagram-selector";

function CategoryReportList() {
  const data = useSelector(getDataForInput);
  const bull = useSelector(getBullForChangePage);

  const dataIcon = bull ? data.income : data.expense;
  const sortDataIcon = data
    ? [...dataIcon].sort((a, b) => b.total - a.total)
    : [];

  return (
    <CategoryListWrapper>
      <CashPicker />
      <CategoryList>
        {data &&
          sortDataIcon.map(({ total, category }) => (
            <Card key={uuidv4()} value={total} category={category} />
          ))}
      </CategoryList>
    </CategoryListWrapper>
  );
}

export default CategoryReportList;
