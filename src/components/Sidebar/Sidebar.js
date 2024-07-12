import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { t } = useTranslation();

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
      link: "/",
    },
    {
      text: t("investments"),
      icon: "../../assets/investments.svg",
      link: "/",
    },
    {
      text: t("credit_cards"),
      icon: "../../assets/credit-cards.svg",
      link: "/credit-cards",
    },
    {
      text: t("loans"),
      icon: "../../assets/loans.svg",
      link: "/",
    },
    {
      text: t("services"),
      icon: "../../assets/services.svg",
      link: "/",
    },
    {
      text: t("my_privileges"),
      icon: "../../assets/my-privileges.svg",
      link: "/",
    },
    {
      text: t("setting"),
      icon: "../../assets/setting.svg",
      link: "/",
    },
  ];

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo-section">
          <img src="../../assets/bankdash.svg" alt="BankDash Logo" />
          <h2 className="sidebar-logo-text">BankDash.</h2>
        </div>
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li className="sidebar-item" key={index}>
              <img src={item.icon} alt={`${item.text} icon`} />
              <Link className="sidebar-item-link" to={item.link}>
                {item.text}
              </Link>
            </li>
          ))}
          <li className="sidebar-item sidebar-close-button">
            <img src="../../assets/close.svg" alt="Close icon" />
            <a className="sidebar-item-link" onClick={toggleSidebar}>
              {t("close_menu")}
            </a>
          </li>
        </ul>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
