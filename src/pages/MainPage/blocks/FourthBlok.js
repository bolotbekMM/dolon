import React from "react";
import css from "./FourthBlok.module.scss";
import pc from "../../../assets/img/mainPage/pc.png";
import pcEn from "../../../assets/img/mainPage/pcEn.png";
import { useTranslation } from "react-i18next";

const FourthBlok = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={css.fourthBlok}>
      <div className="container">
        <div className={css.box}>
          <img
            className={css.pcImage}
            src={i18n.language === "ru" ? pc : pcEn}
            alt="pc"
          />
        </div>
      </div>
    </div>
  );
};

export default FourthBlok;
