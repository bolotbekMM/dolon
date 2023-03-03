import React from "react";
import css from "./FirstBlok.module.scss";
import anime from "../../../assets/img/mainPage/anime.svg";
import { useTranslation } from "react-i18next";

const FirstBlok = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={css.firstBlok}>
      <div className="container">
        <div className={css.box}>
          <div className={css.title}>
            <h1>{t("DolonDescription")}</h1>
          </div>
          <div className={css.animation}>
            <img src={anime} alt="anime" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlok;
