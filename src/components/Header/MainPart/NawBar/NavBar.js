import React, { useState, useEffect } from "react";
import css from "./NavBar.module.scss";
import iconDown from "../../../../assets/icons/headerIcons/downPol.svg";
import MenuModal from "./MenuModal/MenuModal";
import { Link } from "react-router-dom";

const navBarContent = [
  { text: "Экосистема", icon: iconDown, pathName: "/ecosystem" },
  { text: "Новости", icon: null, pathName: "/news" },
  { text: "О компании", icon: null, pathName: "/aboutUs" },
  { text: "Контакты", icon: iconDown, pathName: "/contacts" },
];

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
      return <img src={params} alt="Icon" />;
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
      <ul className={css.navBar}>
        {navBarContent.map((item, index) => {
          return (
            <Link to={item.pathName} key={index} className={css.link} onMouseEnter={() => handleMouseEnter(item)}>
              <p>{item.text}</p>
              {iconShowFunc(item.icon)}
            </Link>
          );
        })}
      </ul>
      {hovered && <MenuModal handleMouseLeave={handleMouseLeave} />}
    </>
  );
};

export default NavBar;
