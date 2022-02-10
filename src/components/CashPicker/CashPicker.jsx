import { useState } from "react";
import {
  CashPickerWrapper,
  Arrow,
  CashPickerSpan,
} from "./CashPickerStyle.styled";
import { SvgIcon } from "../SvgIcon";
import { CategoryReportList } from "../CategoryReportList";

function CashPicker({ children }) {
  const [value, setValue] = useState(false);
  const [data, setData] = useState(children.income);
  console.log("CashPicker", data);
  function handleClick(e) {
    e.preventDefault();
    console.log("Была нажата ссылка.");
    value ? setValue(false) : setValue(true);
    value ? setData(children.income) : setData(children.costs);
  }

  const text = value ? "расходы" : "доходы";

  return (
    <>
      <CashPickerWrapper>
        <Arrow onClick={handleClick}>
          <SvgIcon w={7} h={12} idIcon={"#left"} />
        </Arrow>
        <CashPickerSpan>{text}</CashPickerSpan>
        <Arrow onClick={handleClick}>
          <SvgIcon w={7} h={12} idIcon={"#right"} />
        </Arrow>
      </CashPickerWrapper>
      <CategoryReportList>{data}</CategoryReportList>
    </>
  );
}

export default CashPicker;
