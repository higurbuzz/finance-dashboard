import "./AllCards.css";
import BoxTitle from "../BoxTitle/BoxTitle";
import CreditCard from "../CreditCard/CreditCard";
import useFetch from "../../hooks/useFetch";

const AllCards = ({ maxCardNumber, boxTitle, link, linkText }) => {
  const {
    data: allCards,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/credit-cards");

  return (
    <div className="all-cards">
      <BoxTitle title={boxTitle} link={link} linkText={linkText} />
      <div className="cards">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {allCards &&
          allCards
            .slice(0, maxCardNumber)
            .map((item, index) => <CreditCard key={index} item={item} />)}
      </div>
    </div>
  );
};

export default AllCards;
