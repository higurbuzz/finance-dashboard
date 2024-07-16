import React, { useState } from "react";
import "./LanguageSwitcher.css";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLanguage = i18n.language.includes("-")
    ? i18n.language.split("-")[0]
    : i18n.language;

  return (
    <div className="language-switcher">
      <button
        className="lang-button"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <img
          src={`../../assets/lang-${currentLanguage}.svg`}
          alt="Current Language"
        />
      </button>
      {isOpen && (
        <div
          className="dropdown-menu"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button onClick={() => changeLanguage("en")}>
            <img src="../../assets/lang-en.svg" alt="English" />
            English
          </button>
          <button onClick={() => changeLanguage("tr")}>
            <img src="../../assets/lang-tr.svg" alt="Turkish" />
            Türkçe
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
