import React from "react";
import { NavLink } from "react-router-dom";
import { contactData, moduleContent } from "../../../../../utils/data/data";
import css from "./MenuModal.module.scss";

const MenuModal = ({ handleMouseLeave }) => {
  return (
    <div className={css.menuModal}>
      <div className={css.box} onMouseLeave={handleMouseLeave}>
        <div className={css.modules}>
          {moduleContent.map((item, index) => {
            return (
              <NavLink
                className={css.link}
                to={item.pathName}
                onClick={handleMouseLeave}
                key={index}
              >
                <div className={css.innerBox}>
                  <p>{item.text}</p>
                  <div className={css.underline}></div>
                </div>
              </NavLink>
            );
          })}
        </div>
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
