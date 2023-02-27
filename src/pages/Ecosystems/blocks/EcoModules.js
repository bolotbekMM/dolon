import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { moduleContent } from "../../../utils/data/data";
import css from "./EcoModules.module.scss";

const EcoModules = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={css.ecoModules}>
      <div className="container">
        <div className={css.box}>
          {moduleContent.map((item, index) => {
            return (
              <Link to={item.pathName} key={index} className={css.link}>
                <h3>{t(item.text)}</h3>
                <p>{t(item.description)}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EcoModules;
