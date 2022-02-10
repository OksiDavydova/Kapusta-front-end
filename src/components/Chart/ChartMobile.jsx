import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  Cell,
} from "recharts";
// for test
// const data = [
//   {
//     name: "Свинина",
//     value: 5000,
//   },
//   {
//     name: "Говядина",
//     value: 4500,
//   },
//   {
//     name: "Курица",
//     value: 3200,
//   },
//   {
//     name: "Рыба",
//     value: 2100,
//   },
//   {
//     name: "Панини",
//     value: 1800,
//   },
//   {
//     name: "Кофе",
//     value: 1700,
//   },
//   {
//     name: "Спагетти",
//     value: 1500,
//   },
//   {
//     name: "Шоколад",
//     value: 850,
//   },
//   {
//     name: "Маслины",
//     value: 500,
//   },
//   {
//     name: "Зелень",
//     value: 300,
//   },
// ];

const colors = ["#FF751D", "#FFDAC0"];

// ----------------------Question - to do responsive chart or fixed???
function ChartMobile({ children }) {
  console.log("children", children);

  const sortArray = children.sort(
    (firstSum, secondSum) => secondSum.sum - firstSum.sum
  );

  return (
    <ResponsiveContainer width={320} height={640}>
      <BarChart layout="vertical" width={320} height={640} data={sortArray}>
        <Bar dataKey="sum" fill="#FF751D" barSize={15} radius={[0, 10, 10, 0]}>
          {sortArray.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index % 3 === 0 ? colors[0] : colors[1]}
            />
          ))}
          <LabelList
            dataKey="sum"
            width={100}
            position="right"
            // offset={0}
            dy={-20}
            dx={-38}
            fill={"#52555F"}
            formatter={(number) => `${number.toLocaleString("ru-RU")} грн`}
          />
        </Bar>
        <XAxis type="number" hide />
        <YAxis
          dataKey="categoryName"
          type="category"
          tickLine={false}
          axisLine={false}
          mirror
          dy={-20}
          dx={-7}
          // tick={{stroke: 'red', strokeWidth: 2, tickPadding: 20}}
          // tickMargin={20}
          // tickPadding={20}
          // textAnchor="middle"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ChartMobile;
