import React from "react";
// import { CategoryToReport } from "../components/CategoryToReport";
import { CategoryReportList } from "../components/CategoryReportList";
import { ArrowButton } from "../components/Buttons";
import { MonthPicker } from "../components/MonthPicker";
import {BalanceOval} from "../components/Balance/BalanceOval"
import { ChartMobile } from "../components/Chart";
import { CashPicker } from "../components/CashPicker";
import {ReportBalance} from "../components/ReportBalance"

export default function ReportPage() {
  return (
    <>
      <ArrowButton />
      <MonthPicker />
      <BalanceOval />
      <ReportBalance />
      <CashPicker />
      {/* <CategoryToReport /> */}
      <CategoryReportList />
      <ChartMobile />
    </>
  );
}
