import React from "react";
import { CategoryToReport } from "../components/CategoryToReport";
import { useNavigate } from "react-router-dom";
import { CategoryReportList } from "../components/CategoryReportList";

export default function ReportPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        to main
      </button>
      <CategoryToReport />
      <CategoryReportList />
    </>
  );
}
