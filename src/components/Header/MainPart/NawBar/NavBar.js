import React, { useState } from "react";
import css from "./NavBar.module.scss";
import iconDown from "../../../../assets/icons/headerIcons/downPol.svg";
import MenuModal from "./MenuModal/MenuModal";

const NavBar = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (item) => {
    if (item.text === "Экосистема" || item.text === "Контакты") {
      setHovered(true);
    } else {
      setHovered(false);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const navBarContent = [
    { text: "Экосистема", icon: iconDown, pathName: "/ekosystems" },
    { text: "Новости", icon: null, pathName: "/news" },
    { text: "О компании", icon: null, pathName: "/aboutUs" },
    { text: "Контакты", icon: iconDown, pathName: "/contacts" },
  ];

  function iconShowFunc(params) {
    if (params) {
      return <img src={params} alt="Icon" />;
    }
  }
  return (
    <>
      <ul className={css.navBar}>
        {navBarContent.map((item, index) => {
          return (
            <li key={index} onMouseEnter={() => handleMouseEnter(item)}>
              <p>{item.text}</p>
              {iconShowFunc(item.icon)}
            </li>
          );
        })}
      </ul>
      {hovered && <MenuModal handleMouseLeave={handleMouseLeave} />}
    </>
  );
};

export default NavBar;
