import React from "react";
// import { CategoryToReport } from "../components/CategoryToReport";
import { CategoryReportList } from "../components/CategoryReportList";
import { ArrowButton } from "../components/Buttons";

export default function ReportPage() {
  return (
    <>
      <ArrowButton />

      {/* <CategoryToReport /> */}
      <CategoryReportList />
    </>
  );
}
