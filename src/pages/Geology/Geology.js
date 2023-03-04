import React from "react";
import css from "./Geology.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/geology/geologyImage.svg";
import image from "../../assets/img/geology/geologyImg.png";
import dddImg from "../../assets/img/geology/ddd.png";
import inYan from "../../assets/img/geology/inyan.svg";
import { useTranslation } from "react-i18next";

const Geology = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule module={"Geology"} banner={banner} title={t("Modules.geology")}>
      <div className={css.boxForModule}>
        <div className="container" style={{ zIndex: "3" }}>
          <div className={css.module}>
            <p>{t("moduleGeologyTexts.1")}</p>
            <img src={image} alt="not found" />
            <p>{t("moduleGeologyTexts.2")}</p>
            <p>{t("moduleGeologyTexts.3")}</p>
          </div>
        </div>
      </div>

      <div className={css.shadowEllipsBox}>
        <div className={css.shadowEllips}></div>
      </div>
      <div className={css.components}>
        <div className={css.doc}>
          <div className="container">
            <div className={css.box}>
              <h3 className={css.title}>
                {t("moduleGeologyTexts.components.ditchLogging.name")}
              </h3>
              <p>
                {t("moduleGeologyTexts.components.ditchLogging.paragraph1")}
              </p>
              <ul>
                <li>
                  {t("moduleGeologyTexts.components.ditchLogging.paragraph2")}
                </li>
                <li>
                  {t("moduleGeologyTexts.components.ditchLogging.paragraph3")}
                </li>
                <li>
                  {t("moduleGeologyTexts.components.ditchLogging.paragraph4")}
                </li>
              </ul>
              <span>
                {t("moduleGeologyTexts.components.ditchLogging.paragraph5")}
              </span>
            </div>
          </div>
        </div>
        <div className={css.ddd}>
          <div className="container">
            <div className={css.box}>
              <div className={css.innerBox}>
                <h3 className={css.title}>
                  {t("moduleGeologyTexts.components.ddd.name")}
                </h3>
                <p>{t("moduleGeologyTexts.components.ddd.paragraph1")}</p>
                <ul>
                  <li>{t("moduleGeologyTexts.components.ddd.paragraph2")}</li>
                  <li>{t("moduleGeologyTexts.components.ddd.paragraph3")}</li>
                  <li>{t("moduleGeologyTexts.components.ddd.paragraph4")}</li>
                  <li>{t("moduleGeologyTexts.components.ddd.paragraph5")}</li>
                  <li>{t("moduleGeologyTexts.components.ddd.paragraph6")}</li>
                </ul>
                <span>{t("moduleGeologyTexts.components.ddd.paragraph7")}</span>
              </div>
              <div className={css.boxImg}>
                <img className={css.imgDDD} src={dddImg} alt="3dImage" />
              </div>
            </div>
          </div>
        </div>
        <div className={css.qaqc}>
          <div className="container">
            <div className={css.box}>
              <div className={css.imageBox}>
                <div className={css.shadowEllips}></div>
                <img className={css.imgDDD} src={inYan} alt="3dImage" />
              </div>
              <div className={css.innerBox}>
                <h3 className={css.title}>
                  {t("moduleGeologyTexts.components.qaqc.name")}
                </h3>
                <p>{t("moduleGeologyTexts.components.qaqc.paragraph1")}</p>
                <p>{t("moduleGeologyTexts.components.qaqc.paragraph2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default Geology;
