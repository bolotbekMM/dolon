import React, { useState, useEffect, useRef } from "react";
import css from "./NavBar.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import MenuModal from "./MenuModal/MenuModal";
import {
  contactData,
  moduleContent,
  navBarContent,
} from "../../../../utils/data/data";
import { useTranslation } from "react-i18next";
import ContuctModal from "./ContuctModal/ContuctModal";
import { useMediaQuery } from "react-responsive";

const NavBar = ({ onCloseBurger }) => {
  const navigate = useNavigate();
  const contuctModalRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [hoveredContucts, setHoveredContucts] = useState(false);
  const [inMobileClickToNavBar, setinMobileClickToNavBar] = useState(false);
  const [maxScrollSize, setMaxScrollSize] = useState(window.scrollY);
  const [minScrollSize, setMinScrollSize] = useState(window.scrollY);
  const isFormForMobile = useMediaQuery({ query: "(max-width: 992px)" });

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
    if (!isFormForMobile) {
      navigate(params.pathName);
      setHovered(false);
      setHoveredContucts(false);
    } else {
      if (params.text === "NavBar.eco") {
        setinMobileClickToNavBar((prev) => !prev);
      } else {
        navigate(params.pathName);
        onCloseBurger();
        setinMobileClickToNavBar(false);
      }
    }
  }

  function onClickDropDownMenu() {
    onCloseBurger();
    handleMouseLeave();
    setinMobileClickToNavBar(false);
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
                {item.icon &&
                  (!isFormForMobile || item.text !== "NavBar.contacts") && (
                    <img id={item.text} src={item.icon} alt="Icon" />
                  )}
              </div>
              {item.text === "NavBar.eco" &&
              isFormForMobile &&
              inMobileClickToNavBar ? (
                <div className={css.dropDown}>
                  <NavLink
                    to="/ecosystems"
                    onClick={onClickDropDownMenu}
                    className={css.mobileEcoBtn}
                  >
                    {t("NavBar.eco")}
                  </NavLink>
                  {moduleContent.map((el, index) => {
                    return (
                      <NavLink
                        className={css.linkTo}
                        to={el.pathName}
                        onClick={onClickDropDownMenu}
                        key={index}
                      >
                        {t(el.text)}
                      </NavLink>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
        {isFormForMobile && (
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
        )}
      </div>
      {hovered && !isFormForMobile && (
        <MenuModal handleMouseLeave={handleMouseLeave} />
      )}
      {hoveredContucts && !isFormForMobile && (
        <div ref={contuctModalRef}>
          <ContuctModal />
        </div>
      )}
    </>
  );
};

export default NavBar;
