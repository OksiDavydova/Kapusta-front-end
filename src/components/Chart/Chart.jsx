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

import {dataFromBack} from './data'

let category = "Транспорт";

let data = dataFromBack.filter((item) => item.category === category && item.expense).sort((a, b) => b.value - a.value);

const colors = ["#FF751D", "#FFDAC0"];

// ----------------------Question - to do responsive chart or fixed???
function Chart() {
  return (
    <ResponsiveContainer width={data.length * 63} height={382}>
      <BarChart data={data} barSize={38} barCategoryGap={25}>
        <CartesianGrid vertical={false} />
        <Bar
          dataKey="value"
          fill="#FF751D"
          maxBarSize={38}
          radius={[10, 10, 0, 0]}
          margin={{top: 20, right: 15, bottom: 0, left: 15}}

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
