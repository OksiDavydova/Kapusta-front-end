import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import ruLocale from "date-fns/locale/ru";
import { Calendar } from "./Calendar.styled";
import { SvgIcon } from "../SvgIcon";
import { getDate } from "../../redux/setDate/date-selector";
import { setDateNow } from "../../redux/setDate/date-slice";

function CalendarMUI() {
  const date = useSelector(getDate);
  const dispatch = useDispatch();

  return (
    <Calendar>
      {/* <SvgIcon w={20} h={20} idIcon={"#icon-calendar"} /> */}
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <DatePicker
          mask={"__.__.____"}
          minDate={2016}
          value={date}
          onChange={newValue => {
            const newDate = format(new Date(newValue), "yyyy/MM/dd");
            dispatch(setDateNow(newDate));
          }}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Calendar>
  );
}

export { CalendarMUI };
