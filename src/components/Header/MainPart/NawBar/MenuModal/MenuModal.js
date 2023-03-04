import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { contactData, moduleContent } from "../../../../../utils/data/data";
import css from "./MenuModal.module.scss";

const MenuModal = ({ handleMouseLeave }) => {
  const navigation = window.location.pathname;
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  function onClickFunc(params) {
    handleMouseLeave();
    navigate(params.pathName);
  }
  return (
    <div className={css.menuModal}>
      <div className={css.box} onMouseLeave={handleMouseLeave}>
        <div className={css.modules}>
          {moduleContent.map((item, index) => {
            return (
              <div
                key={index}
                className={css.link}
                onClick={() => onClickFunc(item)}
              >
                <div className={css.innerBox}>
                  <p
                    style={{
                      fontWeight: navigation === item.pathName ? "400" : "300",
                    }}
                  >
                    {t(item.text)}
                  </p>
                  <div
                    // style={{
                    //   width: navigation === item.pathName ? "100%" : "",
                    // }}
                    className={css.underline}
                  ></div>
                </div>
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
    </div>
  );
};

export default MenuModal;
