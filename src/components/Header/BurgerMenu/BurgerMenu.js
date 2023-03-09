import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import {
  contactData,
  moduleContent,
  navBarContent,
} from "../../../utils/data/data";
import Modal from "../../ReModal/Modal";
import css from "./BurgerMenu.module.scss";

const BurgerMenu = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [onClickToModule, setOnClickToModule] = useState(false);

  function onClickNavBarFunction(params) {
    if (params.text === "NavBar.eco") {
      setOnClickToModule((prev) => !prev);
    } else {
      navigate(params.pathName);
      props.onCloseModal();
    }
  }

  return (
    <Modal onCloseModal={props.onCloseModal}>
      <div className={css.burgerMenu}>
        <div className={css.navBar}>
          {navBarContent.map((item, index) => {
            return (
              <div className={css.navBarBox} key={index}>
                <div
                  className={css.link}
                  onClick={() => onClickNavBarFunction(item)}
                >
                  <p>{t(item.text)}</p>
                  {item.text === "NavBar.eco" && (
                    <img
                      style={{
                        transform: `rotateX(${
                          onClickToModule ? "180deg" : "0"
                        })`,
                      }}
                      src={item.icon}
                      alt="Icon"
                    />
                  )}
                </div>
                {onClickToModule && item.text === "NavBar.eco" && (
                  <div className={css.dropDown}>
                    <NavLink
                      to="/ecosystems"
                      onClick={props.onCloseModal}
                      className={css.mobileEcoBtn}
                    >
                      {t("NavBar.eco")}
                    </NavLink>
                    {moduleContent.map((el, index) => {
                      return (
                        <NavLink
                          className={css.linkTo}
                          to={el.pathName}
                          onClick={props.onCloseModal}
                          key={index}
                        >
                          {t(el.text)}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className={css.contactBlock}>
          <ul className={css.phoneNumbers}>
            {contactData.map((item, index) => {
              return (
                <li key={index}>
                  <a className={css.phone} href={`tel:${item.phone}`}>
                    {item.phone}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className={css.line}></div>
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
    </Modal>
  );
};

export default BurgerMenu;
