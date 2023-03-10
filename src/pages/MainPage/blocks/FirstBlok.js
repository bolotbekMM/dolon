import React from "react";
import css from "./FirstBlok.module.scss";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import animationData from "../../../assets/LottieFiles2/animations/animation_1.json";

const FirstBlok = () => {
  const { t, i18n } = useTranslation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={css.firstBlok}>
      <div className="container">
        <div className={css.box}>
          <div className={css.title}>
            <h1>Geological and mining cloud ecosystem</h1>
          </div>
          <div className={css.animation}>
            <Lottie options={defaultOptions} className={css.lottie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlok;
