import AddCard from "../components/AddCard/AddCard";
import AllCards from "../components/AllCards/AllCards";
import "./Pages.css";
import { useTranslation } from "react-i18next";

const CreditCards = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <div className="page-row">
        <div className="page-column" style={{ flexGrow: "1" }}>
          <AllCards boxTitle={t("my_cards")} />
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
