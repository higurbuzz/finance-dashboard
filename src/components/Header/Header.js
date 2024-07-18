import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useSidebar } from "../../contexts/SidebarContext";

const Header = () => {
  const [headerTitle, setHeaderTitle] = useState("Overview");
  const { t } = useTranslation();
  const location = useLocation();
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    const pathToTitle = {
      "/": t("overview"),
      "/credit-cards": t("credit_cards"),
      "/transactions": t("transactions"),
    };

    setHeaderTitle(pathToTitle[location.pathname] || t("page_not_found"));
  }, [location.pathname, t]);

  return (
    <div className="header">
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <h3 className="header-title">{headerTitle}</h3>
      <div className="header-right">
        <SearchBar />
        <div className="header-icon">
          <img src="../../assets/settings.svg" />
        </div>
        <div className="header-icon">
          <img src="../../assets/notification.svg" />
        </div>
        <img
          className="header-profile-picture"
          src="../../assets/profile-picture.png"
        />
      </div>
    </div>
  );
};

export default Header;
