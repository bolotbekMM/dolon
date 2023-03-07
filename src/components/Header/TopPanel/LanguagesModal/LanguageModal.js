import React, { useState, useEffect, useRef } from "react";
import css from "./LanguageModal.module.scss";

const LanguageModal = ({
  languages,
  selectedLanguage,
  onLanguageChange,
  setShowLanguageModal,
}) => {
  const [timer, setTimer] = useState(null);
  const languageModalRef = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  const handleMouseEnter = () => {
    clearTimeout(timer);
  };

  const handleMouseLeave = () => {
    setTimer(
      setTimeout(() => {
        setShowLanguageModal(false);
      }, 2000)
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        languageModalRef.current &&
        !languageModalRef.current.contains(event.target)
      ) {
        setShowLanguageModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageModalRef]);

  return (
    <div className={css.languageBtn} ref={languageModalRef}>
      <div
        className={css.box}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {languages.map((language) => {
          return (
            <div
              key={language.lang}
              className={css.radioBtn}
              onClick={() => onLanguageChange(language)}
              style={
                language.lang === selectedLanguage.lang
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
                name={language.lang}
                value={language.name}
                className={css.radioBtnInput}
                checked={language.lang === selectedLanguage.lang}
                onChange={() => onLanguageChange(language)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageModal;
