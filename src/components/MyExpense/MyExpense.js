import React from "react";
import Box from "../Box/Box";
import BoxTitle from "../BoxTitle/BoxTitle";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useTranslation } from "react-i18next";

const MyExpense = () => {
  const { t } = useTranslation();

  const data = [
    { name: t("aug"), Amount: 8000 },
    { name: t("sep"), Amount: 13000 },
    { name: t("oct"), Amount: 9000 },
    { name: t("nov"), Amount: 5000 },
    { name: t("dec"), Amount: 12500 },
    { name: t("jan"), Amount: 8000 },
  ];

  return (
    <div>
      <BoxTitle title={t("my_expense")} />
      <Box>
        <ResponsiveContainer width="100%" height={175}>
          <BarChart data={data}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip
              labelStyle={{ color: "red" }}
              contentStyle={{
                border: "none",
                borderRadius: "10px",
                background: "white",
              }}
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
