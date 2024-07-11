import AddCard from "../components/AddCard/AddCard";
import AllCards from "../components/AllCards/AllCards";
import "./Pages.css";

const CreditCards = () => {
  return (
    <div className="page-container">
      <div className="page-row">
        <div className="page-column" style={{ flexGrow: "1" }}>
          <AllCards boxTitle="My Cards" />
        </div>
      </div>

      <div className="page-row">
        <div className="page-column" style={{ flexGrow: "1" }}>
          <AddCard />
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
