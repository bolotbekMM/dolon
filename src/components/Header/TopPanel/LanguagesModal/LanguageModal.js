import React, { useState } from "react";
import css from "./LanguageModal.module.scss";
import RU from "../../../../assets/icons/headerIcons/RuFlag.svg";
import Eng from "../../../../assets/icons/headerIcons/EngFlag.svg";

const LanguageModal = ({ langName, onLanguageChange }) => {
  const languages = [
    { id: 11, name: "Русский", icon: RU },
    { id: 12, name: "English", icon: Eng },
  ];

  const selectedLangId = languages.find(
    (language) => language.name === langName
  );

  const [selectedLanguageId, setSelectedLanguageId] = useState(
    selectedLangId.id
  );

  function onLanguageItemClick(e, languageId) {
    setSelectedLanguageId(languageId);
    const selectedLanguage = languages.find(
      (language) => language.id === languageId
    );
    onLanguageChange(selectedLanguage.name);
  }

  return (
    <div className={css.languageBtn}>
      <div className={css.box}>
        {languages.map((language) => {
          return (
            <div
              key={language.id}
              className={css.radioBtn}
              onClick={(e) => onLanguageItemClick(e, language.id)}
              style={
                language.id === selectedLanguageId
                  ? { background: "#f5f5f7" }
                  : { background: "none" }
              }
            >
              <div className={css.radioBtnLable}>
                <img src={language.icon} alt={language.name} />
                <span>{language.name}</span>
              </div>

              <input
                type="radio"
                name={language.name}
                className={css.radioBtnInput}
                checked={language.id === selectedLanguageId}
                onChange={() => setSelectedLanguageId(language.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageModal;
