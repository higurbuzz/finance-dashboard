import "./Pages.css";
import MyCards from "../components/AllCards/AllCards";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import WeeklyActivity from "../components/WeeklyActivity/WeeklyActivity";
import ExpenseStatistics from "../components/ExpenseStatistics/ExpenseStatistics";
import QuickTransfer from "../components/QuickTransfer/QuickTransfer";
import BalanceHistory from "../components/BalanceHistory/BalanceHistory";

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="page-row">
        <div className="page-column" style={{ flexGrow: "2" }}>
          <MyCards
            maxCardNumber="2"
            boxTitle="My Cards"
            link="/credit-cards"
            linkText="See All"
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
