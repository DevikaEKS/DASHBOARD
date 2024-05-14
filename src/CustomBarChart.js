import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'G', uv: 3490, pv: 4300, amt: 2100 },
];

const CustomBarChart = () => {
  return (
    <div className="bar-chart-container">
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" barSize={30}>
          {
            data.map((entry, index) => (
              <defs key={index}>
                <linearGradient id={`color-${index}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
            ))
          }
          {
            data.map((entry, index) => (
              <rect
                key={index}
                x={index * 60}
                y={entry.pv}
                width={40}
                height={300 - entry.pv}
                fill={`url(#color-${index})`}
                rx={10} // border-radius
                strokeWidth={2} // border width
                stroke="#8884d8" // border color
              />
            ))
          }
        </Bar>
      </BarChart>
    </div>
  );
};

export default CustomBarChart;