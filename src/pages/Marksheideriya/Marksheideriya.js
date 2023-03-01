import React from "react";
import css from "./Marksheideriya.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/marksheider/markImage.png";
import image from "../../assets/img/marksheider/markImg.png";
import { useTranslation } from "react-i18next";

const Marksheideriya = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule
      module={"Marksheideria"}
      banner={banner}
      title={t("Modules.marksheideria")}
    >
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>{t("moduleMarksheideriyaTexts.1")}</p>
            <img src={image} alt="not found" />
          </div>
          <div className={css.box2}>
            <ul>
              <li>{t("moduleMarksheideriyaTexts.2")}</li>
              <li>{t("moduleMarksheideriyaTexts.3")}</li>
              <li>{t("moduleMarksheideriyaTexts.4")}</li>
              <li>{t("moduleMarksheideriyaTexts.5")}</li>
              <li>{t("moduleMarksheideriyaTexts.6")}</li>
              <li>{t("moduleMarksheideriyaTexts.7")}</li>
              <li>{t("moduleMarksheideriyaTexts.8")}</li>
              <li>{t("moduleMarksheideriyaTexts.9")}</li>
              <li>{t("moduleMarksheideriyaTexts.10")}</li>
              <li>{t("moduleMarksheideriyaTexts.11")}</li>
              <li>{t("moduleMarksheideriyaTexts.12")}</li>
            </ul>
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default Marksheideriya;
