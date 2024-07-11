import "./AllTransactions.css";
import BoxTitle from "../BoxTitle/BoxTitle";
import Box from "../Box/Box";
import useFetch from "../../hooks/useFetch";

const AllTransactions = () => {
  const {
    data: allTrans,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/all-transactions");

  return (
    <>
      <BoxTitle title="Recent Transactions" />
      <div className="tabs">
        <button className="active">All Transactions</button>
        <button>Income</button>
        <button>Expense</button>
      </div>
      <Box>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Transaction ID</th>
              <th>Type</th>
              <th>Card</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
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
                    <button>Download</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Box>
      <div className="pagination">
        <button>&lt; Previous</button>
        <span className="page-numbers">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </span>
        <button>Next &gt;</button>
      </div>
    </>
  );
};

export default AllTransactions;
