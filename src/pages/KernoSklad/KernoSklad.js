import React from "react";
import css from "./KernoSklad.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/kernosklad/KernoBanner.png";
import { useTranslation } from "react-i18next";

const KernoSklad = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule
      module={"KernoSklad"}
      banner={banner}
      title={t("Modules.kernosklad")}
    >
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>{t("moduleKernoSkladTexts.1")}</p>
            <p>{t("moduleKernoSkladTexts.2")}</p>
          </div>
          <div className={css.box2}>
            <p>{t("moduleKernoSkladTexts.3")}</p>
            <p>{t("moduleKernoSkladTexts.4")}</p>
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default KernoSklad;
