import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import BoxTitle from "../BoxTitle/BoxTitle";
import Box from "../Box/Box";

const data = [
  { name: "Jul", uv: 100 },
  { name: "Aug", uv: 700 },
  { name: "Sep", uv: 500 },
  { name: "Oct", uv: 800 },
  { name: "Nov", uv: 200 },
  { name: "Dec", uv: 600 },
  { name: "Jan", uv: 220 },
];

const BalanceHistory = () => {
  return (
    <div className="balance-history">
      <BoxTitle title="Balance History" />
      <Box>
        <ResponsiveContainer width="100%" height={226}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#0000FF"
              fill="#0000FF"
              fillOpacity={0.3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

export default BalanceHistory;
