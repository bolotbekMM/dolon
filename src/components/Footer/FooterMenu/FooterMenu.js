import React from "react";
import css from "./FooterMenu.module.scss";
import iconDown from "../../../assets/icons/headerIcons/downPol.svg";
import { contactData, moduleContent } from "../../../utils/data/data";

const FooterMenu = () => {
  const navBarContent = [
    { text: "Экосистема", icon: iconDown, pathName: "/ekosystems" },
    { text: "Новости", icon: null, pathName: "/news" },
    { text: "О компании", icon: null, pathName: "/aboutUs" },
    { text: "Контакты", icon: iconDown, pathName: "/contacts" },
  ];

  return (
    <div className={css.menuFooter}>
      <div className="container">
        <div className={css.box}>
          <div className={css.cont}>
            <ul className={css.navBar}>
              <h5>Главная</h5>
              {navBarContent.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item.text}</p>
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
                    <p>{item.text}</p>
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
