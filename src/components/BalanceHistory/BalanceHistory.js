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
import { useTranslation } from "react-i18next";

const BalanceHistory = () => {
  const { t } = useTranslation();

  const data = [
    { name: t("jul"), uv: 100 },
    { name: t("aug"), uv: 700 },
    { name: t("sep"), uv: 500 },
    { name: t("oct"), uv: 800 },
    { name: t("nov"), uv: 200 },
    { name: t("dec"), uv: 600 },
    { name: t("jan"), uv: 220 },
  ];

  return (
    <div className="balance-history">
      <BoxTitle title={t("balance_history")} />
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
