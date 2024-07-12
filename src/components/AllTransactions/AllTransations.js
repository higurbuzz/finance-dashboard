import "./AllTransactions.css";
import BoxTitle from "../BoxTitle/BoxTitle";
import Box from "../Box/Box";
import useFetch from "../../hooks/useFetch";
import { useTranslation } from "react-i18next";

const AllTransactions = () => {
  const { t } = useTranslation();

  const {
    data: allTrans,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/all-transactions");

  return (
    <>
      <BoxTitle title={t("recent_transactions")} />
      <div className="tabs">
        <button className="active">{t("all_transactions")}</button>
        <button>{t("income")}</button>
        <button>{t("expense")}</button>
      </div>
      <Box>
        <table>
          <thead>
            <tr>
              <th>{t("description")}</th>
              <th>{t("transaction_id")}</th>
              <th>{t("type")}</th>
              <th>{t("card")}</th>
              <th>{t("date")}</th>
              <th>{t("amount")}</th>
              <th>{t("receipt")}</th>
            </tr>
          </thead>
          <tbody>
            {error && <div>{error}</div>}
            {isLoading && <div>{t("loading")}</div>}
            {allTrans &&
              allTrans.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.description}</td>
                  <td>{transaction.transactionID}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.card}</td>
                  <td>{transaction.date}</td>
                  <td className={transaction.isIncome ? "income" : "expense"}>
                    {transaction.isIncome ? "+" : "-"}${transaction.amount}
                  </td>
                  <td>
                    <button>{t("download")}</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Box>
      <div className="pagination">
        <button>&lt; {t("previous")}</button>
        <span className="page-numbers">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </span>
        <button>{t("next")} &gt;</button>
      </div>
    </>
  );
};

export default AllTransactions;
