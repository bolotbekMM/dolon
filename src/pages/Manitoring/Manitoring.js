import React from "react";
import css from "./Manitoring.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/manitoring/manitoringBanner2.png";
import bannerEn from "../../assets/img/manitoring/manitoringBanner3.png";
import monitoringImg from "../../assets/img/manitoring/manitoringImage.png";
import fileManagerImageEn from "../../assets/img/manitoring/fileManagerImgeng.png";
import { useTranslation } from "react-i18next";

const Manitoring = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule
      module={"Monitoring"}
      banner={i18n.language === "ru" ? banner : bannerEn}
      title={t("Modules.monitoring")}
    >
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>{t("moduleMonitoringTexts.1")}</p>
            <p>{t("moduleMonitoringTexts.2")}</p>
            <p>{t("moduleMonitoringTexts.3")}</p>
            <p>{t("moduleMonitoringTexts.4")}</p>
          </div>
          <div className={css.box2}>
            <img
              src={i18n.language === "ru" ? monitoringImg : fileManagerImageEn}
            />
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default Manitoring;
