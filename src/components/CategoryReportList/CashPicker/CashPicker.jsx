import { useState } from "react";
import {
  CashPickerWrapper,
  CashPickerDiv,
  Arrow,
  CashPickerSpan,
} from "./CashPickerStyle.styled";

import { SvgIcon } from "../../SvgIcon";

function CashPicker({ children, updateData }) {
  const [value, setValue] = useState(false);

  const dataExpense = children.filter((item) => item.expense);
  const dataIncome = children.filter((item) => !item.expense);

  function handleClick(e) {
    e.preventDefault();
    console.log("Click CashPicker!");
    value ? setValue(false) : setValue(true);
    value ? updateData(dataIncome) : updateData(dataExpense);
  }

  let text = value ? "расходы" : "доходы";

  return (
    <CashPickerWrapper>
      <CashPickerDiv>
        <Arrow onClick={handleClick}>
          <SvgIcon w={7} h={12} idIcon={"#left"} />
        </Arrow>
        <CashPickerSpan>{text}</CashPickerSpan>
        <Arrow onClick={handleClick}>
          <SvgIcon w={7} h={12} idIcon={"#right"} />
        </Arrow>
      </CashPickerDiv>
    </CashPickerWrapper>
  );
}

export default CashPicker;
