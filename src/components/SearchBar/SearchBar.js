import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img
        src="../../assets/magnifying-glass.svg"
        alt="Search Icon"
        className="search-icon"
      />
      <input
        type="text"
        placeholder="Search for something"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
