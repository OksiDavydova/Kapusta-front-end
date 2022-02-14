import React from "react";
import { useSelector } from "react-redux";
import { getDataDiagram } from "../../redux/setDataDiagram/dataDiagram-selector";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  Cell,
} from "recharts";

function ChartMobile() {
  const getDataChart = useSelector(getDataDiagram);

  const colors = ["#FF751D", "#FFDAC0"];
  return (
    <ResponsiveContainer width={300} height={getDataChart.length * 50}>
      <BarChart
        data={getDataChart}
        layout="vertical"
        margin={{ top: 30, right: 20, bottom: 0, left: 15 }}
      >
        <Bar
          dataKey="value"
          fill="#FF751D"
          barSize={15}
          radius={[0, 10, 10, 0]}
        >
          {getDataChart.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index % 3 === 0 ? colors[0] : colors[1]}
            />
          ))}
          <LabelList
            dataKey="value"
            width={100}
            position="right"
            // offset={0}
            // dy={-20}
            // dx={-68}
            fill={"#52555F"}
            formatter={number => `${number.toLocaleString("ru-RU")} грн`}
            style={{
              fontSize: "10px",
            }}
          />
        </Bar>
        <XAxis type="number" hide />
        <YAxis
          dataKey="name"
          type="category"
          width={180}
          tickLine={false}
          axisLine={false}
          mirror
          dy={-15}
          dx={-7}
          // margin={{top: 20, right: 20, bottom: 20, left: 20}}
          style={{
            fontSize: "10px",
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default ChartMobile;
