import React from "react";
import Parallax from "../../../components/Parallax/Parallax";
import bgImage from "../../../assets/img/mainPage/prallax1.svg";
import { useTranslation } from "react-i18next";

const SecondBlok = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Parallax content={t("MainParallaxText")} img={bgImage} />
    </>
  );
};

export default SecondBlok;
