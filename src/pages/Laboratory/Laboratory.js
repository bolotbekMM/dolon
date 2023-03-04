import React from "react";
import css from "./Laboratory.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/laboratory/laboratoryBanner.png";
import { useTranslation } from "react-i18next";

const Laboratory = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule
      module={"Drilling"}
      banner={banner}
      title={t("Modules.laboratory")}
    >
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>{t("moduleLabaratoryTexts.1")}</p>
            <p>{t("moduleLabaratoryTexts.2")}</p>
          </div>
          <div className={css.box2}>
            <p>{t("moduleLabaratoryTexts.3")}</p>
            <p>{t("moduleLabaratoryTexts.4")}</p>
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default Laboratory;
