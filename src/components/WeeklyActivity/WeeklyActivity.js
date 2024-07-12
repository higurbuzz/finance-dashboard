import React from "react";
import Box from "../Box/Box";
import BoxTitle from "../BoxTitle/BoxTitle";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

const WeeklyActivity = () => {
  const { t } = useTranslation();

  const data = [
    { name: t("sat"), Deposit: 400, Withdraw: 240 },
    { name: t("sun"), Deposit: 300, Withdraw: 139 },
    { name: t("mon"), Deposit: 200, Withdraw: 480 },
    { name: t("tue"), Deposit: 278, Withdraw: 390 },
    { name: t("wed"), Deposit: 189, Withdraw: 480 },
    { name: t("thu"), Deposit: 239, Withdraw: 380 },
    { name: t("fri"), Deposit: 349, Withdraw: 430 },
  ];

  return (
    <div>
      <BoxTitle title={t("weekly_activity")} />
      <Box>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Deposit" name={t("deposit")} fill="#8884d8" />
            <Bar dataKey="Withdraw" name={t("withdraw")} fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

export default WeeklyActivity;
