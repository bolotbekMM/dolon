import React, { useState, useEffect, useRef } from "react";
import css from "./NavBar.module.scss";
import { useNavigate } from "react-router-dom";
import MenuModal from "./MenuModal/MenuModal";
import { navBarContent } from "../../../../utils/data/data";
import { useTranslation } from "react-i18next";
import ContuctModal from "./ContuctModal/ContuctModal";

const NavBar = () => {
  const navigate = useNavigate();
  const contuctModalRef = useRef(null);
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
        setHoveredContucts(false);
        setMaxScrollSize(window.scrollY + 600);
        setMinScrollSize(window.scrollY - 600);
      } else if (item.text === "NavBar.contacts") {
        setHoveredContucts(true);
        setHovered(false);
        setMaxScrollSize(window.scrollY + 600);
        setMinScrollSize(window.scrollY - 600);
      } else {
        setHovered(false);
        setHoveredContucts(false);
      }
    }, 400);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setHoveredContucts(false);
    clearTimeout(timeout);
  };

  function endHover() {
    clearTimeout(timeout);
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

  function onClickNavBarFunction(params) {
    navigate(params.pathName);
    setHovered(false);
    setHoveredContucts(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        contuctModalRef.current &&
        !contuctModalRef.current.contains(event.target)
      ) {
        setHoveredContucts(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [contuctModalRef]);

  return (
    <>
      <div className={css.navBar}>
        {navBarContent.map((item, index) => {
          return (
            <div className={css.navBarBox} key={index}>
              <div
                className={css.link}
                onClick={() => onClickNavBarFunction(item)}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={() => endHover()}
              >
                {t(item.text)}
                {item.icon && <img src={item.icon} alt="Icon" />}
              </div>
            </div>
          );
        })}
      </div>
      {hovered && <MenuModal handleMouseLeave={handleMouseLeave} />}
      {hoveredContucts && (
        <div ref={contuctModalRef}>
          <ContuctModal handleMouseLeave={handleMouseLeave} />
        </div>
      )}
    </>
  );
};

export default NavBar;
