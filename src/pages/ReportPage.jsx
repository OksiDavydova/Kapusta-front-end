import React from "react";
// import { CategoryToReport } from "../components/CategoryToReport";
import { CategoryReportList } from "../components/CategoryReportList";
import { ArrowButton } from "../components/Buttons";
import { MonthPicker } from "../components/MonthPicker";
import { ChartMobile } from "../components/Chart";
import { CashPicker } from "../components/CashPicker";

const DB = {
  costs: [
    {
      categoryName: "Продукты",
      id: 1,
      src: `#icon-products `,
      sum: 1400,
      data: [
        {
          sum: 500,
          categoryName: "Говядина",
          id: 1,
          data: "20220208",
        },
        {
          sum: 300,
          categoryName: "Свинина",
          id: 2,
          data: "20220208",
        },
        {
          sum: 600,
          categoryName: "Телятина",
          id: 3,
          data: "20220208",
        },
      ],
    },
    {
      categoryName: "Алкоголь",
      id: 2,
      src: `#icon-alcohol `,
      sum: 1200,
      data: [
        {
          sum: 500,
          categoryName: "Джэк",
          id: 1,
          data: "20220208",
        },
        {
          sum: 300,
          categoryName: "Лекёр",
          id: 2,
          data: "20220208",
        },
        {
          sum: 400,
          categoryName: "Сэм",
          id: 3,
          data: "20220208",
        },
      ],
    },
    {
      categoryName: "Спорт",
      id: 2,
      src: `#icon-alcohol `,
      sum: 1200,
      data: [
        {
          sum: 5000,
          categoryName: "Гантели",
          id: 1,
          data: "20220208",
        },
        {
          sum: 3050,
          categoryName: "Штанга",
          id: 2,
          data: "20220208",
        },
        {
          sum: 4700,
          categoryName: "Спорт-пит",
          id: 3,
          data: "20220208",
        },
      ],
    },
  ],
  income: [
    {
      categoryName: "ЗП",
      id: 1,
      src: `#icon-alcohol`,
      sum: 84000,
      data: [
        {
          sum: 50000,
          categoryName: "Моя ЗП",
          id: 1,
          data: "20220208",
        },
        {
          sum: 30000,
          categoryName: "ЗП Жены",
          id: 2,
          data: "20220208",
        },
        {
          sum: 4000,
          categoryName: "Фриланс",
          id: 3,
          data: "20220208",
        },
      ],
    },
  ],
};

export default function ReportPage() {
  return (
    <>
      <ArrowButton />
      <MonthPicker />
      <CashPicker>{DB}</CashPicker>
      {/* <CategoryToReport /> */}
      {/* <CategoryReportList />
      <ChartMobile /> */}
    </>
  );
}
