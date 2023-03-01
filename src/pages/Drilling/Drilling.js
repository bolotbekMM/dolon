import React from "react";
import css from "./Drilling.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/drilling/drillingBanner.png";
import image from "../../assets/img/drilling/drillingImg.png";
import { useTranslation } from "react-i18next";

const Drilling = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule module={"Drilling"} banner={banner} title={t("Modules.drilling")}>
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>{t("moduleDrillingTexts.1")}</p>
            <div className={css.line}></div>
            <ul>
              <li>{t("moduleDrillingTexts.2")}</li>
              <li>{t("moduleDrillingTexts.3")}</li>
              <li>{t("moduleDrillingTexts.4")}</li>
              <li>{t("moduleDrillingTexts.5")}</li>
              <li>{t("moduleDrillingTexts.6")}</li>
              <li>{t("moduleDrillingTexts.7")}</li>
            </ul>
          </div>
          <div className={css.box2}>
            <p>{t("moduleDrillingTexts.8")}</p>
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default Drilling;
