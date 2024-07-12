import "./SearchBar.css";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <div className="search-bar">
      <img
        src="../../assets/magnifying-glass.svg"
        alt="Search Icon"
        className="search-icon"
      />
      <input
        type="text"
        placeholder={t("search_for_something")}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
