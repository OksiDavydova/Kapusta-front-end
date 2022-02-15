import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  MonthPickerWrapper,
  MonthPickerText,
  Arrow,
  MonthPickerSpan,
} from "./MonthPickerStyle.styled";
import { SvgIcon } from "../SvgIcon";
import { getDataForDiagram } from "../../redux/setDataDiagram/dataDiagram-operation";

function MonthPicker() {
  const dispatch = useDispatch();

  const text = "Текущий период:";

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
    month.find((item, index) => index === currentDate.getMonth()),
  );
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  function handleClickLeft(e) {
    e.preventDefault();
    const index = month.indexOf(currentMonth);
    let getMonth = index.toString();
    if (getMonth.length === 1) getMonth = "0" + getMonth;
    if (getMonth === "00") getMonth = "12";
    if (index !== 0) {
      setCurrentMonth(month[index - 1]);
      dispatch(getDataForDiagram(currentYear.toString() + getMonth));
      return;
    }
    setCurrentYear(currentYear - 1);
    setCurrentMonth(month[month.length - 1]);
    dispatch(getDataForDiagram((currentYear - 1).toString() + getMonth));
    return;
  }

  function handleClickRight(e) {
    e.preventDefault();
    const index = month.indexOf(currentMonth);
    let getMonth = (index + 2).toString();
    if (getMonth.length === 1) getMonth = "0" + getMonth;
    if (getMonth === "13") getMonth = "01";
    if (index !== month.length - 1) {
      setCurrentMonth(month[index + 1]);
      dispatch(getDataForDiagram(currentYear.toString() + getMonth));
      return;
    }
    setCurrentYear(currentYear + 1);
    setCurrentMonth(month[0]);

    dispatch(getDataForDiagram((currentYear + 1).toString() + getMonth));
    return;
  }

  useEffect(() => {
    let getMonth = (new Date().getMonth() + 1).toString();
    const getYear = new Date().getFullYear().toString();
    if (getMonth.length === 1) getMonth = "0" + getMonth;

    dispatch(getDataForDiagram(getYear + getMonth));
  }, [dispatch]);

  return (
    <MonthPickerWrapper>
      <MonthPickerText>{text}</MonthPickerText>
      <MonthPickerSpan>
        <Arrow onClick={handleClickLeft}>
          <SvgIcon w={7} h={12} idIcon={"#left"} />
        </Arrow>
        {[currentMonth, " ", currentYear]}
        <Arrow onClick={handleClickRight}>
          <SvgIcon w={7} h={12} idIcon={"#right"} />
        </Arrow>
      </MonthPickerSpan>
    </MonthPickerWrapper>
  );
}

export default MonthPicker;
