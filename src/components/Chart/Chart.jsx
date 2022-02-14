import React from "react";
import { useSelector } from "react-redux";
import { getDataDiagram } from "../../redux/setDataDiagram/dataDiagram-selector";
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

import { dataFromBack } from "./data";

// let category = "Транспорт";

// let data = dataFromBack
//   .filter(item => item.category === category && item.expense)
//   .sort((a, b) => b.value - a.value);

const colors = ["#FF751D", "#FFDAC0"];

// ----------------------Question - to do responsive chart or fixed???
function Chart() {
  const getDataChart = useSelector(getDataDiagram);

  return (
    <ResponsiveContainer width={getDataChart.length * 63} height={382}>
      <BarChart data={getDataChart} barSize={38} barCategoryGap={25}>
        <CartesianGrid vertical={false} />
        <Bar
          dataKey="value"
          fill="#FF751D"
          maxBarSize={38}
          radius={[10, 10, 0, 0]}
          margin={{ top: 20, right: 15, bottom: 0, left: 15 }}
        >
          {getDataChart.map((entry, index) => (
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
            formatter={number => `${number.toLocaleString("ru-RU")} грн`}
          />
        </Bar>
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis dataKey="value" hide tickCount={10} axisLine={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
