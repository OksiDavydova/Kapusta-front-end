import { useState } from "react";
import {
  MonthPickerWrapper,
  MonthPickerText,
  Arrow,
  MonthPickerSpan,
} from "./MonthPickerStyle.styled";
import { SvgIcon } from "../SvgIcon";

function MonthPicker() {
  let currentDate = new Date();

  const month_name = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

  const [monthCurrent, setMonthCurrent] = useState(
    month_name.find((item, index) => index === currentDate.getMonth())
  );
  // const [yearCurrent, setyearCurrent] = useState(currentDate.getFullYear());

  // let month = currentDate.getMonth();
  // let year = currentDate.getFullYear();

  function handleClickLeft(e) {
    e.preventDefault();
    console.log("Была нажата ссылка.");
    console.log("monthCurrent: ", monthCurrent);

    for (let i = 0; ; i++) {
      console.log(i);
      if (month_name[i] === monthCurrent)
        return setMonthCurrent(month_name[i - 1]);
    }
  }

  function handleClickRight(e) {
    e.preventDefault();
    console.log("Была нажата ссылка.");
    console.log("monthCurrent: ", monthCurrent);
    for (let i = 0; ; i++) {
      console.log(i);
      if (month_name[i] === monthCurrent)
        return setMonthCurrent(month_name[i + 1]);
    }
  }

  return (
    <MonthPickerWrapper>
      <MonthPickerText>Текущий период:</MonthPickerText>
      <Arrow onClick={handleClickLeft}>
        <SvgIcon w={7} h={12} idIcon={"#left"} />
      </Arrow>
      <MonthPickerSpan>
        {monthCurrent}
        {/* {yearCurrent} */}
      </MonthPickerSpan>
      <Arrow onClick={handleClickRight}>
        <SvgIcon w={7} h={12} idIcon={"#right"} />
      </Arrow>
    </MonthPickerWrapper>
  );
}

export default MonthPicker;
