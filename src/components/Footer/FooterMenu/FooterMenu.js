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
          <div className={css.cont}>
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

          <div className={css.cont}>
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

          <div className={css.cont}>
            <h4>{t("Glob.Contacts")}</h4>
            <ul className={css.contacts}>
              {contactData.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{t(item.country)}</p>
                    <p>{t(item.adress)}</p>
                    <p className={css.phone}>{item.phone}</p>
                    <p className={css.email}>{item.email}</p>
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
