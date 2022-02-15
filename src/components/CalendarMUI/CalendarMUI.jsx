import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Media from "react-media";
import { SvgIcon } from "../SvgIcon";
import { getDate } from "../../redux/setDate/date-selector";
import { setDateNow } from "../../redux/setDate/date-slice";
import { Calendar } from "./Calendar.styled";

import { format } from "date-fns";
import ruLocale from "date-fns/locale/ru";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TextField } from "@mui/material";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import InputAdornment from "@mui/material/InputAdornment";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiInput-underline:after": {
      border: "none",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
    "& .MuiInputBase-root": {
      padding: 10,
      marginRight: 0,
    },
    "& .MuiInputBase-input": {
      padding: 0,
      margin: 0,
      marginLeft: -5,
      border: 0,
      fontSize: 12,
      fontWeight: 900,
      letterSpacing: "0.04em",
      color: "#52555f",
    },
  },
});

function CalendarMUI() {
  // const calendarRef=useRef(null)
  // Эти два хука нужны, чтобы при нажатии на иконку - открывался календарь также, помимо нажатия на само поле + для стилей
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const date = useSelector(getDate);
  const dispatch = useDispatch();

  function DateIcon() {
    return <SvgIcon w={20} h={20} idIcon={"#icon-calendar"} />;
  }

  return (
    <Calendar>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <Media
          query="(max-width: 1279px)"
          render={() => (
            <MobileDatePicker
              showToolbar={false}
              // cancelText = {false}
              // okText = {false}
              disableCloseOnSelect={false}
              inputFormat="dd.MM.yyyy"
              maxDate={new Date()}
              minDate={2021}
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              value={date}
              onChange={(newValue) => {
                const newDate = format(new Date(newValue), "yyyy/MM/dd");
                dispatch(setDateNow(newDate));
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className={classes.root}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position={"start"}
                        disablePointerEvents={false}
                      >
                        <IconButton edge="start" onClick={(e) => setOpen(true)}>
                          <SvgIcon w={20} h={20} idIcon={"#icon-calendar"} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          )}
        />

        <Media
          query="(min-width: 1280px)"
          render={() => (
            <DesktopDatePicker
              inputFormat="dd.MM.yyyy"
              maxDate={new Date()}
              minDate={2021}
              InputAdornmentProps={{ position: "start" }}
              components={{
                OpenPickerIcon: DateIcon,
              }}
              value={date}
              onChange={(newValue) => {
                const newDate = format(new Date(newValue), "yyyy/MM/dd");
                dispatch(setDateNow(newDate));
              }}
              renderInput={(params) => (
                <TextField {...params} className={classes.root} />
              )}
            />
          )}
        />
      </LocalizationProvider>
    </Calendar>
  );
}

export { CalendarMUI };
