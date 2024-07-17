import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const menuItems = [
    {
      text: t("dashboard"),
      icon: "../../assets/home.svg",
      link: "/",
    },
    {
      text: t("transactions"),
      icon: "../../assets/transactions.svg",
      link: "/transactions",
    },
    {
      text: t("accounts"),
      icon: "../../assets/accounts.svg",
      link: "/accounts",
    },
    {
      text: t("investments"),
      icon: "../../assets/investments.svg",
      link: "/investments",
    },
    {
      text: t("credit_cards"),
      icon: "../../assets/credit-cards.svg",
      link: "/credit-cards",
    },
    {
      text: t("loans"),
      icon: "../../assets/loans.svg",
      link: "/loans",
    },
    {
      text: t("services"),
      icon: "../../assets/services.svg",
      link: "/services",
    },
    {
      text: t("my_privileges"),
      icon: "../../assets/my-privileges.svg",
      link: "/privileges",
    },
    {
      text: t("setting"),
      icon: "../../assets/setting.svg",
      link: "/setting",
    },
  ];

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <Link className="logo-section" to="/">
          <img src="../../assets/bankdash.svg" alt="BankDash Logo" />
          <h2 className="logo-text">BankDash.</h2>
        </Link>

        <ul className="menu">
          {menuItems.map((item, index) => (
            <Link
              className={`menu-item${
                location.pathname === item.link ? " active" : ""
              }`}
              to={item.link}
            >
              <li key={index}>
                <img src={item.icon} alt={`${item.text} icon`} />
                <span>{item.text}</span>
              </li>
            </Link>
          ))}
          <a className="menu-item close-button" onClick={toggleSidebar}>
            <li>
              <img src="../../assets/close.svg" alt="Close icon" />
              <span>{t("close_menu")}</span>
            </li>
          </a>
        </ul>
        <div className="sidebar-switchers">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
