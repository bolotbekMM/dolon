import React from "react";
import css from "./FooterMenu.module.scss";
import {
  contactData,
  moduleContent,
  navBarContent,
} from "../../../utils/data/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterMenu = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={css.menuFooter}>
      <div className="container">
        <div className={css.box}>
          <div className={css.cont} style={{ minWidth: "100px" }}>
            <ul className={css.navBar}>
              <Link to="/">
                <h5>{t("Glob.Main")}</h5>
              </Link>
              {navBarContent.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.pathName}>
                      <p>{t(item.text)}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={css.cont} style={{ minWidth: "360px" }}>
            <h4>{t("Modules.Modules")}</h4>
            <ul className={css.modules}>
              {moduleContent.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.pathName}>
                      <p>{t(item.text)}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={css.cont} style={{ minWidth: "600px" }}>
            <h4>{t("Glob.Contacts")}</h4>
            <ul className={css.contacts}>
              {contactData.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{t(item.country)}</p>
                    <p>{t(item.adress)}</p>
                    <a className={css.phone} href={`tel:${item.phone}`}>
                      {item.phone}
                    </a>
                    <a className={css.email} href={`mailto:${item.email}`}>
                      {item.email}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
