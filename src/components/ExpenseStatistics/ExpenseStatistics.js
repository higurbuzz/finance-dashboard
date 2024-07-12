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
import { useTranslation } from "react-i18next";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ExpenseStatistics = () => {
  const { t } = useTranslation();

  const data = [
    { name: t("entertainment"), value: 30 },
    { name: t("bill_expense"), value: 15 },
    { name: t("investment"), value: 20 },
    { name: t("others"), value: 35 },
  ];

  return (
    <div>
      <BoxTitle title={t("expense_statistics")} />
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
