import React from "react";
import Box from "../Box/Box";
import BoxTitle from "../BoxTitle/BoxTitle";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Aug", Amount: 8000 },
  { name: "Sep", Amount: 13000 },
  { name: "Oct", Amount: 9000 },
  { name: "Now", Amount: 5000 },
  { name: "Dec", Amount: 12500 },
  { name: "Jan", Amount: 8000 },
];

const MyExpense = () => {
  return (
    <div>
      <BoxTitle title="My Expense" />
      <Box>
        <ResponsiveContainer width="100%" height={175}>
          <BarChart data={data}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ border: "none", background: "none" }}
              itemStyle={{ color: "#000" }}
              cursor={{ fill: "transparent" }}
            />
            <Bar dataKey="Amount" fill="#a5b7dc" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

export default MyExpense;
