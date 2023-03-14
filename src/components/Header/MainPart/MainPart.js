import React, { useState, useEffect } from "react";
import css from "./MainPart.module.scss";
import NavBar from "./NawBar/NavBar";
import logoIcon from "../../../assets/icons/headerIcons/logoIcon.svg";
import burger from "../../../assets/icons/headerIcons/burger.svg";
import Dolon from "../../../assets/icons/headerIcons/Dolon.svg";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const MainPart = () => {
  const [openBurger, setopenBurger] = useState(false);
  const isFormForMobile = useMediaQuery({ query: "(max-width: 992px)" });

  const location = window.location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isFormForMobile) {
      setopenBurger(false);
    }
  }, [isFormForMobile]);

  if (openBurger) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "overlay";

  const scrollToTop = () => {
    if (location === "/") {
      const scrollStep = window.pageYOffset / 50;

      const scrollInterval = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(scrollInterval);
        }

        window.scroll(0, window.pageYOffset - scrollStep);
      }, 20);
    } else {
      navigate("/");
    }
  };

  return (
    <div className={css.mainPart}>
      <div className="container">
        <div className={css.box}>
          <div onClick={scrollToTop} className={css.logoPart}>
            <img src={logoIcon} alt="logoIcon" />
            <img src={Dolon} alt="Dolon" />
          </div>
          <div className={css.navbarComponent}>
            {!isFormForMobile ? (
              <div className={css.navvBar}>
                <NavBar />
              </div>
            ) : (
              <div
                onClick={() => setopenBurger(true)}
                className={css.burgerBtn}
              >
                <img src={burger} alt="burger" />
              </div>
            )}
          </div>
        </div>
      </div>
      {openBurger && <BurgerMenu onCloseModal={() => setopenBurger(false)} />}
    </div>
  );
};

export default MainPart;
