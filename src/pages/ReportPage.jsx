import React from "react";
import { CategoryToReport } from "../components/CategoryToReport";
import { useNavigate } from "react-router-dom";

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
    </>
  );
}
