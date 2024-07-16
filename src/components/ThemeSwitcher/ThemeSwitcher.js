import React, { useState, useEffect } from "react";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "auto");

  useEffect(() => {
    const handleSystemThemeChange = (e) => {
      if (theme === "auto") {
        document.documentElement.setAttribute(
          "data-theme",
          e.matches ? "dark" : "light"
        );
      }
    };

    const systemDarkThemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    if (theme === "auto") {
      document.documentElement.setAttribute(
        "data-theme",
        systemDarkThemeMediaQuery.matches ? "dark" : "light"
      );
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }

    systemDarkThemeMediaQuery.addEventListener(
      "change",
      handleSystemThemeChange
    );

    return () => {
      systemDarkThemeMediaQuery.removeEventListener(
        "change",
        handleSystemThemeChange
      );
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme =
      theme === "light" ? "dark" : theme === "dark" ? "auto" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "auto") {
      const systemDarkThemeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      document.documentElement.setAttribute(
        "data-theme",
        systemDarkThemeMediaQuery.matches ? "dark" : "light"
      );
    } else {
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  return (
    <div className="theme-switcher">
      <button className="theme-button" onClick={toggleTheme}>
        {theme === "light" && (
          <img src="../../assets/theme-light.svg" alt="Switch to Dark Theme" />
        )}
        {theme === "dark" && (
          <img src="../../assets/theme-dark.svg" alt="Switch to Light Theme" />
        )}
        {theme === "auto" && (
          <img src="../../assets/theme-auto.svg" alt="Switch to Auto Theme" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
