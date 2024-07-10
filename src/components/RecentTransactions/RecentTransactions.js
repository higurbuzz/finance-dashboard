import "./RecentTransaction.css";
import BoxTitle from "../BoxTitle/BoxTitle";
import Box from "../Box/Box";

const RecentTransactions = () => {
  const transactions = [
    {
      icon: "../../assets/credit-cards-1.svg",
      color: "orange",
      title: "Deposit from my Card",
      date: "28 January 2021",
      amount: 850,
      isIncome: false,
    },
    {
      icon: "../../assets/paypal.svg",
      color: "purple",
      title: "Deposit Paypal",
      date: "25 January 2021",
      amount: 2500,
      isIncome: true,
    },
    {
      icon: "../../assets/income-dollar.svg",
      color: "green",
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: 5400,
      isIncome: true,
    },
  ];

  return (
    <div className="recent-transactions">
      <BoxTitle title="Recent Transactions" />
      <Box>
        <div className="transactions">
          {transactions.map((transaction, index) => (
            <div className="transaction" key={index}>
              <div
                className="transaction-icon"
                style={{
                  backgroundColor: `var(--icon-${transaction.color}-bg)`,
                }}
              >
                <img src={transaction.icon} />
              </div>
              <div className="transaction-details">
                <div className="transaction-title">{transaction.title}</div>
                <div className="transaction-date">{transaction.date}</div>
              </div>
              <div
                className={`transaction-amount ${
                  transaction.isIncome ? "income" : "expense"
                }`}
              >
                {transaction.isIncome ? "+" : "-"}${transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default RecentTransactions;
