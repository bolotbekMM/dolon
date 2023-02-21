import React, { useState } from "react";
import css from "./TopPanel.module.scss";
import youtube from "../../../assets/icons/headerIcons/youtube.svg";
import linkedIn from "../../../assets/icons/headerIcons/linkedIn.svg";
import down from "../../../assets/icons/headerIcons/down.svg";
import LanguageModal from "./LanguagesModal/LanguageModal";

const TopPanel = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [langName, setLangName] = useState("Русский");

  function onLanguageChange(newLangName) {
    setLangName(newLangName);
    setShowLanguageModal(false);
  }

  function onClickFunc() {
    setShowLanguageModal((prev) => !prev);
  }

  return (
    <div className={css.topPanel}>
      <div className="container">
        <div className={css.box}>
          <div className={css.leftSide}>
            <div className={css.icons}>
              <img src={youtube} alt="youtube" />
              <img src={linkedIn} alt="linkedIn" />
            </div>
            <div className={css.telNumbers}>
              <p>+996 700 173 295</p>
              <p>+7 771 225 98 34</p>
            </div>
          </div>
          <div className={css.languagePart}>
            <button onClick={onClickFunc} className={css.languageBtn}>
              <span>{langName}</span>
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
                langName={langName}
                onLanguageChange={onLanguageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPanel;
