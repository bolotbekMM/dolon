import React from "react";
import css from "./FirstBlok.module.scss";
import anime from "../../../assets/img/mainPage/anime.svg";

const FirstBlok = () => {
  return (
    <div className={css.firstBlok}>
      <div className="container">
        <div className={css.box}>
          <div className={css.title}>
            <h1>Dolon - горно-геологическая облачная экосистема</h1>
          </div>
          <div className={css.animation}>
            <img src={anime} alt="anime" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlok;
