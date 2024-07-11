import "./Pages.css";
import AllCards from "../components/AllCards/AllCards";
import AllTransactions from "../components/AllTransactions/AllTransations";
import MyExpense from "../components/MyExpense/MyExpense";

const Transactions = () => {
  return (
    <div className="page-container">
      <div className="page-row">
        <div className="page-column" style={{ flexGrow: "2" }}>
          <AllCards
            maxCardNumber="2"
            boxTitle="My Cards"
            link="/credit-cards"
            linkText="+ Add Card"
          />
        </div>
        <div className="page-column" style={{ flexGrow: "1" }}>
          <MyExpense />
        </div>
      </div>

      <div className="page-row">
        <div className="page-column" style={{ flexGrow: "1" }}>
          <AllTransactions />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
