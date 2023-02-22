import React from "react";
import css from "./FooterMenu.module.scss";
import {
  contactData,
  moduleContent,
  navBarContent,
} from "../../../utils/data/data";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <div className={css.menuFooter}>
      <div className="container">
        <div className={css.box}>
          <div className={css.cont}>
            <ul className={css.navBar}>
              <Link to="/">
                <h5>Главная</h5>
              </Link>
              {navBarContent.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.pathName}>
                      <p>{item.text}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={css.cont}>
            <h4>Модули</h4>
            <ul className={css.modules}>
              {moduleContent.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.pathName}>
                      <p>{item.text}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={css.cont}>
            <h4>Контакты</h4>
            <ul className={css.contacts}>
              {contactData.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item.country}</p>
                    <p>{item.adress}</p>
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
