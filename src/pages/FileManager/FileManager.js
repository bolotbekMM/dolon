import React from "react";
import css from "./FileManager.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/fileManager/fileManager1.png";
import bannerEn from "../../assets/img/fileManager/bannerEng.png";
import fileManagerImage from "../../assets/img/fileManager/fileManagerImage.svg";
import fileManagerImageEn from "../../assets/img/fileManager/fileManagerEng.png";
import { useTranslation } from "react-i18next";

const FileManager = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule
      module={"FileManager"}
      banner={i18n.language === "ru" ? banner : bannerEn}
      title={t("Modules.fileManager")}
    >
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>{t("moduleFileManagerTexts.1")}</p>
            <div className={css.line}></div>
            <ul>
              <li>{t("moduleFileManagerTexts.2")}</li>
              <li>{t("moduleFileManagerTexts.3")}</li>
              <li>{t("moduleFileManagerTexts.4")}</li>
              <li>{t("moduleFileManagerTexts.5")}</li>
            </ul>
          </div>
          <div className={css.box2}>
            <img
              src={
                i18n.language === "ru" ? fileManagerImage : fileManagerImageEn
              }
            />
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default FileManager;
