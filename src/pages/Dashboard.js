import "./Pages.css";
import AllCards from "../components/AllCards/AllCards";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import WeeklyActivity from "../components/WeeklyActivity/WeeklyActivity";
import ExpenseStatistics from "../components/ExpenseStatistics/ExpenseStatistics";
import QuickTransfer from "../components/QuickTransfer/QuickTransfer";
import BalanceHistory from "../components/BalanceHistory/BalanceHistory";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <div className="page-row">
        <div className="page-column" style={{ flexGrow: "2" }}>
          <AllCards
            maxCardNumber="2"
            boxTitle={t("my_cards")}
            link="/credit-cards"
            linkText={t("see_all")}
          />
        </div>
        <div className="page-column" style={{ flexGrow: "1" }}>
          <RecentTransactions />
        </div>
      </div>

      <div className="page-row">
        <div className="page-column" style={{ flexGrow: "2" }}>
          <WeeklyActivity />
        </div>
        <div className="page-column" style={{ flexGrow: "1" }}>
          <ExpenseStatistics />
        </div>
      </div>

      <div className="page-row">
        <div className="page-column" style={{ flexGrow: "7" }}>
          <QuickTransfer />
        </div>
        <div className="page-column" style={{ flexGrow: "10" }}>
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
