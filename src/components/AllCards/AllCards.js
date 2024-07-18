import "./AllCards.css";
import BoxTitle from "../BoxTitle/BoxTitle";
import CreditCard from "../CreditCard/CreditCard";
import useFetch from "../../hooks/useFetch";
import { useTranslation } from "react-i18next";
import { useSidebar } from "../../contexts/SidebarContext";

const AllCards = ({ maxCardNumber, boxTitle, link, linkText }) => {
  const { t } = useTranslation();
  const { state } = useSidebar();

  const {
    data: allCards,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/credit-cards");

  const containerMaxWidth = 1520; // px
  const sidebarWidth = state.isMobileView ? 0 : 275; // px
  const paddingWidth = window.innerWidth < 992 ? 50 : 82; // px
  const computedWidth = `calc(min(${containerMaxWidth}px, 100vw - ${
    sidebarWidth + paddingWidth
  }px))`;

  return (
    <div className="all-cards">
      <BoxTitle title={boxTitle} link={link} linkText={linkText} />
      <div className="cards" style={{ maxWidth: computedWidth }}>
        {error && <div>{error}</div>}
        {isLoading && <div>{t("loading")}</div>}
        {allCards &&
          allCards
            .slice(0, maxCardNumber)
            .map((item, index) => <CreditCard key={index} item={item} />)}
      </div>
    </div>
  );
};

export default AllCards;
