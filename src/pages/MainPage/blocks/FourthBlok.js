import React from "react";
import css from "./FourthBlok.module.scss";
import pc from "../../../assets/img/mainPage/pc.svg";

const FourthBlok = () => {
  return (
    <div className={css.fourthBlok}>
      <div className="container">
        <div className={css.box}>
          <img src={pc} alt="pc" />
        </div>
      </div>
    </div>
  );
};

export default FourthBlok;
