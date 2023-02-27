import React from "react";
import { useTranslation } from "react-i18next";
import css from "./ThirdBlok.module.scss";

const ThirdBlok = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className={css.bgImage}>
      <div className={css.thirdBlok}>
        <div className="container">
          <div className={css.box}>
            <p>{t("ThirdBlockDolonDescription.1")}</p>
            <p>{t("ThirdBlockDolonDescription.2")}</p>
            <p>{t("ThirdBlockDolonDescription.3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdBlok;
