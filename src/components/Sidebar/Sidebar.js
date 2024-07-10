import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { text: "Dashboard", icon: "../../assets/home.svg", link: "/" },
    { text: "Transactions", icon: "../../assets/transactions.svg", link: "/#" },
    { text: "Accounts", icon: "../../assets/accounts.svg", link: "/#" },
    { text: "Investments", icon: "../../assets/investments.svg", link: "/#" },
    {
      text: "Credit Cards",
      icon: "../../assets/credit-cards.svg",
      link: "/credit-cards",
    },
    { text: "Loans", icon: "../../assets/loans.svg", link: "/#" },
    { text: "Services", icon: "../../assets/services.svg", link: "/#" },
    {
      text: "My Privileges",
      icon: "../../assets/my-privileges.svg",
      link: "/#",
    },
    { text: "Setting", icon: "../../assets/setting.svg", link: "/#" },
  ];

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo-section">
          <img src="../../assets/bankdash.svg" />
          <h2 className="sidebar-logo-text">BankDash.</h2>
        </div>
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li className="sidebar-item" key={index}>
              <img src={item.icon} />
              <Link className="sidebar-item-link" to={item.link}>
                {item.text}
              </Link>
            </li>
          ))}
          <li className="sidebar-item sidebar-close-button">
            <img src="../../assets/close.svg" />
            <a className="sidebar-item-link" onClick={toggleSidebar}>
              Close Menu
            </a>
          </li>
        </ul>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
