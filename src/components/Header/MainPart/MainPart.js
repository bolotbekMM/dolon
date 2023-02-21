import React from "react";
import css from "./MainPart.module.scss";
import NavBar from "./NawBar/NavBar";
import logoIcon from "../../../assets/icons/headerIcons/logoIcon.svg";
import Dolon from "../../../assets/icons/headerIcons/Dolon.svg";

const MainPart = () => {
  return (
    <div className={css.mainPart}>
      <div className="container">
        <div className={css.box}>
          <div className={css.logoPart}>
            <img src={logoIcon} alt="logoIcon" />
            <img src={Dolon} alt="Dolon" />
          </div>
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default MainPart;
