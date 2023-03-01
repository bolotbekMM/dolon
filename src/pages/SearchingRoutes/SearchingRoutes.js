import React from "react";
import css from "./SearchingRoutes.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/searchingRoutes/SearchingRoutes.png";
import { useTranslation } from "react-i18next";

const SearchingRoutes = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule
      module={"SearchingRoutes"}
      banner={banner}
      title={t("Modules.searchRoutes")}
    >
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>{t("moduleSearchingRoutesTexts.1")}</p>
            <div className={css.line}></div>
            <ul>
              <li>{t("moduleSearchingRoutesTexts.2")}</li>
              <li>{t("moduleSearchingRoutesTexts.3")}</li>
              <li>{t("moduleSearchingRoutesTexts.4")}</li>
            </ul>
          </div>
          <div className={css.box2}>
            <p>{t("moduleSearchingRoutesTexts.5")}</p>
            <p>{t("moduleSearchingRoutesTexts.6")}</p>
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default SearchingRoutes;
