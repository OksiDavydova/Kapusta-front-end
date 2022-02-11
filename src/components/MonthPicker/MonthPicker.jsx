import { useState } from "react";
import {
  MonthPickerWrapper,
  MonthPickerText,
  Arrow,
  MonthPickerSpan,
} from "./MonthPickerStyle.styled";
import { SvgIcon } from "../SvgIcon";

function MonthPicker() {
  const text = 'Текущий период:'

  const month = [
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
  
  let currentDate = new Date();
  
  const [currentMonth, setCurrentMonth] = useState(
    month.find((item, index) => index === currentDate.getMonth())
  );
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  function handleClickLeft(e) {
    e.preventDefault();
    const index = month.indexOf(currentMonth)
    if (index !== 0) return setCurrentMonth(month[index-1])
    setCurrentYear(currentYear-1)
    return setCurrentMonth(month[month.length-1])
  }

  function handleClickRight(e) {
    e.preventDefault();
    const index = month.indexOf(currentMonth)
    if (index !== month.length-1 ) return setCurrentMonth(month[index+1])
    setCurrentYear(currentYear+1)
    return setCurrentMonth(month[0])
  }

  return (
    <MonthPickerWrapper>
      <MonthPickerText>{text}</MonthPickerText>
      <MonthPickerSpan>
      <Arrow onClick={handleClickLeft}>
        <SvgIcon w={7} h={12} idIcon={"#left"} />
      </Arrow>
        {[currentMonth, ' ', currentYear]}
      <Arrow onClick={handleClickRight}>
        <SvgIcon w={7} h={12} idIcon={"#right"} />
      </Arrow>
      </MonthPickerSpan>
    </MonthPickerWrapper>
  );
}

export default MonthPicker;
