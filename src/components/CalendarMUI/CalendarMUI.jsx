import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import ruLocale from "date-fns/locale/ru";
import { Calendar } from "./Calendar.styled";
import { SvgIcon } from "../SvgIcon";

function CalendarMUI() {
  const [value, setValue] = useState(new Date());
  console.log(value);
  return (
    <Calendar>
      {/* <SvgIcon w={20} h={20} idIcon={"#icon-calendar"} /> */}
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <DatePicker
          mask={"__.__.____"}
          minDate={new Date("2021-01-01")}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Calendar>
  );
}

export { CalendarMUI };
