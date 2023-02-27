import React from "react";
import { useTranslation } from "react-i18next";
import css from "./EcoContent.module.scss";

const EcoContent = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={css.ecoContent}>
      <div className="container">
        <div className={css.box}>
          <div className={css.firstBox}>
            <p>{t("EcoContent.1")}</p>
          </div>
          <div className={css.secondBox}>
            <div className={css.line}></div>
            <ul>
              <li>
                <p>{t("EcoContent.2")}</p>
              </li>
              <li>
                <p>{t("EcoContent.3")}</p>
              </li>
              <li>
                <p>{t("EcoContent.4")}</p>
              </li>
              <li>
                <p>{t("EcoContent.5")}</p>
              </li>
              <li>
                <p>{t("EcoContent.6")}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoContent;
