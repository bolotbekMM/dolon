import React, { useState, useEffect } from "react";
import css from "./NavBar.module.scss";
import MenuModal from "./MenuModal/MenuModal";
import { NavLink } from "react-router-dom";
import { navBarContent } from "../../../../utils/data/data";

const NavBar = () => {
  const [hovered, setHovered] = useState(false);
  const [maxScrollSize, setMaxScrollSize] = useState(window.scrollY);
  const [minScrollSize, setMinScrollSize] = useState(window.scrollY);

  const handleMouseEnter = (item) => {
    if (item.text === "Экосистема" || item.text === "Контакты") {
      setHovered(true);
      setMaxScrollSize(window.scrollY + 600);
      setMinScrollSize(window.scrollY - 600);
    } else {
      setHovered(false);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

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
            >
              <p>{item.text}</p>
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
