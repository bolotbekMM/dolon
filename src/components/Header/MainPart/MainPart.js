import React, { useState, useEffect } from "react";
import css from "./MainPart.module.scss";
import NavBar from "./NawBar/NavBar";
import logoIcon from "../../../assets/icons/headerIcons/logoIcon.svg";
import close from "../../../assets/icons/headerIcons/close.svg";
import burger from "../../../assets/icons/headerIcons/burger.svg";
import Dolon from "../../../assets/icons/headerIcons/Dolon.svg";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const MainPart = () => {
  const [openBurger, setopenBurger] = useState(false);
  const isFormForMobile = useMediaQuery({ query: "(max-width: 992px)" });
  function onCloseBurger() {
    if (isFormForMobile) {
      setopenBurger((prev) => !prev);
    }
  }

  useEffect(() => {
    if (!isFormForMobile) {
      setopenBurger(false);
    }
  }, [isFormForMobile]);

  // if (openBurger) document.body.style.overflow = "hidden";
  // else document.body.style.overflow = "overlay";

  return (
    <div className={css.mainPart}>
      <div className="container">
        <div className={css.box}>
          <NavLink to="/" className={css.logoPart}>
            <img src={logoIcon} alt="logoIcon" />
            <img src={Dolon} alt="Dolon" />
          </NavLink>
          <div className={css.navbarComponent}>
            <div
              className={`${css.navvBar} ${!openBurger && css.closeNaveBar}`}
            >
              <NavBar onCloseBurger={onCloseBurger} />
            </div>
            <div onClick={onCloseBurger} className={css.burgerBtn}>
              {openBurger ? (
                <img src={close} alt="close" />
              ) : (
                <img src={burger} alt="burger" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPart;
