import React, { PureComponent } from "react";
import { useSelector } from "react-redux";
import {
  getDataDiagram,
  getDataForInput,
} from "../../redux/setDataDiagram/dataDiagram-selector";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Cell,
  Text,
} from "recharts";

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;
    return (
      <Text x={x} y={y} width={60} textAnchor="middle" verticalAnchor="start">
        {payload.value}
      </Text>
    );
  }
}

function Chart({width}) {
  const getDataChart = useSelector(getDataDiagram);
  const data = useSelector(getDataForInput);

  const arrayFromRender = data ? getDataChart : [];

  const colors = ["#FF751D", "#FFDAC0"];

  return (
    // <ResponsiveContainer width={arrayFromRender.length * 63} height={382}>
    <ResponsiveContainer width={width} height={400} >
      <BarChart 
        data={arrayFromRender}
        maxwidth={600}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <CartesianGrid vertical={false} />
        <Bar 
          dataKey="value" 
          maxBarSize={38} 
          radius={[10, 10, 0, 0]}
        >
          {arrayFromRender.map((entry, index) => (
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
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          interval={0}
          height={50}
          tick={<CustomizedAxisTick />}
          // angle={30}
          // dy={20}
          // dx={30}
          // padding={{ bottom: 100 }}
          // tick={{textAnchor: "start", width: 100, scaleToFit: 'true'}}
          // width={100}
        />
        <YAxis dataKey="value" hide tickCount={10} axisLine={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
