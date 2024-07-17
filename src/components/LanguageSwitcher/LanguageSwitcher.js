import React, { useState } from "react";
import "./LanguageSwitcher.css";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language.includes("-")
    ? i18n.language.split("-")[0]
    : i18n.language;

  const [lang, setLang] = useState(currentLanguage);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "tr" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="language-switcher">
      <button className="lang-button" onClick={toggleLanguage}>
        {lang === "en" && <img src="../../assets/lang-en.svg" alt="English" />}
        {lang === "tr" && <img src="../../assets/lang-tr.svg" alt="Turkish" />}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
