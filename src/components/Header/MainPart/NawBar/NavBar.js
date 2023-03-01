import React, { useState, useEffect } from "react";
import css from "./NavBar.module.scss";
import MenuModal from "./MenuModal/MenuModal";
import { NavLink } from "react-router-dom";
import { navBarContent } from "../../../../utils/data/data";
import { useTranslation } from "react-i18next";
import ContuctModal from "./ContuctModal/ContuctModal";

const NavBar = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredContucts, setHoveredContucts] = useState(false);
  const [maxScrollSize, setMaxScrollSize] = useState(window.scrollY);
  const [minScrollSize, setMinScrollSize] = useState(window.scrollY);

  const { t, i18n } = useTranslation();

  let timeout;

  const handleMouseEnter = (item) => {
    timeout = setTimeout(function () {
      if (item.text === "NavBar.eco") {
        setHovered(true);
        setMaxScrollSize(window.scrollY + 600);
        setMinScrollSize(window.scrollY - 600);
      } else if (item.text === "NavBar.contacts") {
        setHoveredContucts(true);
        setMaxScrollSize(window.scrollY + 600);
        setMinScrollSize(window.scrollY - 600);
      } else {
        setHovered(false);
        setHoveredContucts(false);
      }
    }, 300);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setHoveredContucts(false);
    clearTimeout(timeout);
  };

  function endHover() {
    clearTimeout(timeout);
    console.log("qwret");
  }

  function iconShowFunc(params) {
    if (params.icon) {
      return (
        <img
          id={params.text}
          src={params.icon}
          alt="Icon"
          style={
            hovered || hoveredContucts ? { transform: "rotate(180deg)" } : null
          }
        />
      );
    }
  }

  const handleScrolll = () => {
    if (window.scrollY >= maxScrollSize || window.scrollY <= minScrollSize) {
      setHovered(false);
      setHoveredContucts(false);
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
              {iconShowFunc(item)}
            </NavLink>
          );
        })}
      </div>
      {hovered && <MenuModal handleMouseLeave={handleMouseLeave} />}
      {hoveredContucts && <ContuctModal handleMouseLeave={handleMouseLeave} />}
    </>
  );
};

export default NavBar;
