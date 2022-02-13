import React from "react";

import Media from "react-media";

// import { CategoryReportList } from "../components/CategoryReportList";
import { ArrowButton } from "../components/Buttons";
import { MonthPicker } from "../components/MonthPicker";

import { BalanceOval } from "../components/Balance/BalanceOval";
import { Chart, ChartMobile } from "../components/Chart";

// import { CashPicker } from "../components/CategoryReportList/CashPicker";
import { CategoryReportList } from "../components/CategoryReportList";
import { ReportBalance } from "../components/ReportBalance";
import {
  ReportPageWrapper,
  ReportPageTopWrapper,
  ChartTabletWrapper,
} from "../components/Wrapper/Wrapper.styled";
import { dataFromBack } from "../components/Chart/data";

// const DB = {
//   costs: [
//     {
//       categoryName: "Продукты",
//       id: 1,
//       src: `#icon-products `,
//       sum: 1400,
//       data: [
//         {
//           sum: 500,
//           categoryName: "Говядина",
//           id: 1,
//           data: "20220208",
//           income: false,
//         },
//         {
//           sum: 300,
//           categoryName: "Свинина",
//           id: 2,
//           data: "20220208",
//         },
//         {
//           sum: 600,
//           categoryName: "Телятина",
//           id: 3,
//           data: "20220208",
//         },
//       ],
//     },
//     {
//       categoryName: "Алкоголь",
//       id: 2,
//       src: `#icon-alcohol `,
//       sum: 1200,
//       data: [
//         {
//           sum: 500,
//           categoryName: "Джэк",
//           id: 1,
//           data: "20220208",
//         },
//         {
//           sum: 300,
//           categoryName: "Лекёр",
//           id: 2,
//           data: "20220208",
//         },
//         {
//           sum: 400,
//           categoryName: "Сэм",
//           id: 3,
//           data: "20220208",
//         },
//       ],
//     },
//     {
//       categoryName: "Спорт",
//       id: 2,
//       src: `#icon-hobby`,
//       sum: 1200,
//       data: [
//         {
//           sum: 5000,
//           categoryName: "Гантели",
//           id: 1,
//           data: "20220208",
//         },
//         {
//           sum: 3050,
//           categoryName: "Штанга",
//           id: 2,
//           data: "20220208",
//         },
//         {
//           sum: 4700,
//           categoryName: "Спорт-пит",
//           id: 3,
//           data: "20220208",
//         },
//       ],
//     },
//   ],
//   income: [
//     {
//       categoryName: "ЗП",
//       id: 1,
//       src: `#icon-alcohol`,
//       sum: 84000,
//       data: [
//         {
//           sum: 50000,
//           categoryName: "Моя ЗП",
//           id: 1,
//           data: "20220208",
//           income: false,
//         },
//         {
//           sum: 30000,
//           categoryName: "ЗП Жены",
//           id: 2,
//           data: "20220208",
//         },
//         {
//           sum: 4000,
//           categoryName: "Фриланс",
//           id: 3,
//           data: "20220208",
//         },
//       ],
//     },
//   ],
// };

export default function ReportPage() {
  return (
    <ReportPageWrapper>
      <Media query="(max-width: 767.98px)" render={() => <ArrowButton />} />
      <Media query="(max-width: 767.98px)" render={() => <MonthPicker />} />
      <Media query="(max-width: 767.98px)" render={() => <BalanceOval />} />

      <Media
        query="(min-width: 768px)"
        render={() => (
          <ReportPageTopWrapper>
            <ArrowButton />
            <BalanceOval />
            <MonthPicker />
          </ReportPageTopWrapper>
        )}
      />
      <ReportBalance />

      <CategoryReportList>{dataFromBack}</CategoryReportList>
      <Media query="(max-width: 767.98px)" render={() => <ChartMobile />} />

      <Media
        query="(min-width: 768px)"
        render={() => (
          <ChartTabletWrapper>
            <Chart />
          </ChartTabletWrapper>
        )}
      />
    </ReportPageWrapper>
  );
}
