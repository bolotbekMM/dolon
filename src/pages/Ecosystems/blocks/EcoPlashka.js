import React from "react";
import { useTranslation } from "react-i18next";
import css from "./EcoPlashka.module.scss";

const EcoPlashka = () => {
  const { t } = useTranslation();
  return (
    <div className={css.ecoPlashka}>
      <div className="container">
        <div className={css.box}>
          <p>{t("EcoPlashka")}</p>
        </div>
      </div>
    </div>
  );
};

export default EcoPlashka;
