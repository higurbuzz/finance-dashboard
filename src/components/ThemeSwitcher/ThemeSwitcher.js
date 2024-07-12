import React, { useState, useEffect } from "react";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="theme-switcher">
      <button className="theme-button" onClick={toggleTheme}>
        {theme === "dark" ? (
          <img src="../../assets/theme-light.svg" alt="Switch to Light Theme" />
        ) : (
          <img src="../../assets/theme-dark.svg" alt="Switch to Dark Theme" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
