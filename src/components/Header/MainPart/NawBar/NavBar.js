import React, { useState, useEffect } from "react";
import css from "./NavBar.module.scss";
import MenuModal from "./MenuModal/MenuModal";
import { NavLink } from "react-router-dom";
import { navBarContent } from "../../../../utils/data/data";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [hovered, setHovered] = useState(false);
  const [maxScrollSize, setMaxScrollSize] = useState(window.scrollY);
  const [minScrollSize, setMinScrollSize] = useState(window.scrollY);

  const { t, i18n } = useTranslation();

  let timeout;

  const handleMouseEnter = (item) => {
    timeout = setTimeout(function () {
      if (item.text === "NavBar.eco" || item.text === "NavBar.contacts") {
        setHovered(true);
        setMaxScrollSize(window.scrollY + 600);
        setMinScrollSize(window.scrollY - 600);
      } else {
        setHovered(false);
      }
    }, 400);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    clearTimeout(timeout);
  };

  function endHover() {
    clearTimeout(timeout);
    console.log("qwret");
  }

  function iconShowFunc(params) {
    if (params) {
      return (
        <img
          src={params}
          alt="Icon"
          style={hovered ? { transform: "rotate(180deg)" } : null}
        />
      );
    }
  }

  const handleScrolll = () => {
    if (window.scrollY >= maxScrollSize || window.scrollY <= minScrollSize) {
      setHovered(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolll);
    return () => {
      window.removeEventListener("scroll", handleScrolll);
    };
  }, [window.scrollY]);

  return (
    <>
      <div className={css.navBar}>
        {navBarContent.map((item, index) => {
          return (
            <NavLink
              to={item.pathName}
              key={index}
              className={css.link}
              onClick={() => setHovered(false)}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={() => endHover()}
            >
              <p>{t(item.text)}</p>
              {iconShowFunc(item.icon)}
            </NavLink>
          );
        })}
      </div>
      {hovered && <MenuModal handleMouseLeave={handleMouseLeave} />}
    </>
  );
};

export default NavBar;
