import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = ({ title, toggleSidebar }) => {
  return (
    <div className="header">
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <h3 className="header-title">{title}</h3>
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
