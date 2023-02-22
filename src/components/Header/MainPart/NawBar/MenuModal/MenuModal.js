import React from "react";
import { Link } from "react-router-dom";
import { contactData, moduleContent } from "../../../../../utils/data/data";
import css from "./MenuModal.module.scss";

const MenuModal = ({ handleMouseLeave }) => {
  return (
    <div className={css.menuModal}>
      <div className={css.box} onMouseLeave={handleMouseLeave}>
        <ul className={css.modules}>
          {moduleContent.map((item, index) => {
            return (
              <Link key={index} to={item.pathName} className={css.link}>
                <div className={css.innerBox}>
                  <p>{item.text}</p>
                  <div className={css.underline}></div>
                </div>
              </Link>
            );
          })}
        </ul>
        <div className={css.contactBlock}>
          <ul className={css.phoneNumbers}>
            {contactData.map((item, index) => {
              return (
                <li key={index}>
                  <p className={css.phone}>{item.phone}</p>
                </li>
              );
            })}
          </ul>
          <div className={css.line}></div>
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
  );
};

export default MenuModal;
