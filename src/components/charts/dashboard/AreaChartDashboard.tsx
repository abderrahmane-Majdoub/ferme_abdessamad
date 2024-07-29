import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 600,
    pv: 2400,
    amt: 2200,
  },
  {
    name: "Page B",
    uv: 700,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 800,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 900,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 1200,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 1400,
    pv: 4300,
    amt: 2100,
  },
];

export default function AreaChartDashboard() {
  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}
