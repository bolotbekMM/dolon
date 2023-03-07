import React, { useState, useEffect } from "react";
import css from "./TopPanel.module.scss";
import youtube from "../../../assets/icons/headerIcons/youtube.svg";
import linkedIn from "../../../assets/icons/headerIcons/linkedIn.svg";
import down from "../../../assets/icons/headerIcons/down.svg";
import LanguageModal from "./LanguagesModal/LanguageModal";
import RU from "../../../assets/icons/headerIcons/RuFlag.svg";
import Eng from "../../../assets/icons/headerIcons/EngFlag.svg";

import { useTranslation } from "react-i18next";

const TopPanel = () => {
  const { t, i18n } = useTranslation();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const userLanguage = navigator.language || navigator.userLanguage;

  const languages = [
    { name: "Русский", lang: "ru", icon: RU },
    { name: "English", lang: "en", icon: Eng },
  ];
  let setLang;

  if (userLanguage === "ru") {
    setLang = languages.find((item) => item.lang === "ru");
  } else {
    setLang = languages.find((item) => item.lang === "en");
  }

  const [selectedLanguage, setSelectedLanguage] = useState(setLang);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage.lang);
  }, [selectedLanguage]);

  function onLanguageChange(props) {
    setSelectedLanguage(props);
    i18n.changeLanguage(selectedLanguage.lang);
    setShowLanguageModal(false);
  }

  function onCloseModalFunc() {
    setShowLanguageModal((prev) => !prev);
  }

  return (
    <div className={css.topPanel}>
      <div className="container">
        <div className={css.box}>
          <div className={css.leftSide}>
            <div className={css.icons}>
              <a
                target="_blank"
                href="https://www.youtube.com/@dolon.ecosystem"
              >
                <img src={youtube} alt="youtube" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/dolon">
                <img src={linkedIn} alt="linkedIn" />
              </a>
            </div>
            <div className={css.telNumbers}>
              <a href="tel:+996700173295">+996 700 173 295</a>
              <a href="tel:+996700173295">+7 771 225 98 34</a>
            </div>
          </div>
          <div className={css.languagePart}>
            <button onClick={onCloseModalFunc} className={css.languageBtn}>
              <span>{selectedLanguage.name}</span>
              <img
                src={down}
                alt="down"
                style={
                  showLanguageModal ? { transform: "rotate(180deg)" } : null
                }
              />
            </button>
            {showLanguageModal && (
              <LanguageModal
                languages={languages}
                selectedLanguage={selectedLanguage}
                onLanguageChange={onLanguageChange}
                setShowLanguageModal={setShowLanguageModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPanel;
