import React from "react";
// import { CategoryToReport } from "../components/CategoryToReport";
import { CategoryReportList } from "../components/CategoryReportList";
import { ArrowButton } from "../components/Buttons";
import { MonthPicker } from "../components/MonthPicker";
import { ChartMobile } from "../components/Chart";
import { CashPicker } from "../components/CashPicker";

export default function ReportPage() {
  return (
    <>
      <ArrowButton />
      <MonthPicker />
      <CashPicker />
      {/* <CategoryToReport /> */}
      <CategoryReportList />
      <ChartMobile />
    </>
  );
}
