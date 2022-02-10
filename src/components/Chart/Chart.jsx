import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Cell,
} from "recharts";

const data = [
  {
    name: "Свинина",
    value: 5000,
  },
  {
    name: "Говядина",
    value: 4500,
  },
  {
    name: "Курица",
    value: 3200,
  },
  {
    name: "Рыба",
    value: 2100,
  },
  {
    name: "Панини",
    value: 1800,
  },
  {
    name: "Кофе",
    value: 1700,
  },
  {
    name: "Спагетти",
    value: 1500,
  },
  {
    name: "Шоколад",
    value: 850,
  },
  {
    name: "Маслины",
    value: 500,
  },
  {
    name: "Зелень",
    value: 300,
  },
];

const colors = ["#FF751D", "#FFDAC0"];

// ----------------------Question - to do responsive chart or fixed???
function Chart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} barSize={38} barCategoryGap={25}>
        <CartesianGrid vertical={false} />
        <Bar
          dataKey="value"
          fill="#FF751D"
          maxBarSize={38}
          radius={[10, 10, 0, 0]}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index % 3 === 0 ? colors[0] : colors[1]}
            />
          ))}
          <LabelList
            dataKey={"value"}
            width={100}
            position="top"
            offset={10}
            fill={"#52555F"}
            formatter={(number) => `${number.toLocaleString("ru-RU")} грн`}
          />
        </Bar>
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis dataKey="value" hide tickCount={10} axisLine={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
