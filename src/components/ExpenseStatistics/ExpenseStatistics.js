import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Box from "../Box/Box";
import BoxTitle from "../BoxTitle/BoxTitle";

const data = [
  { name: "Entertainment", value: 30 },
  { name: "Bill Expense", value: 15 },
  { name: "Investment", value: 20 },
  { name: "Others", value: 35 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ExpenseStatistics = () => {
  return (
    <div>
      <BoxTitle title="Expense Statistics" />
      <Box>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} labelLine={false} fill="#8884d8" dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

export default ExpenseStatistics;
