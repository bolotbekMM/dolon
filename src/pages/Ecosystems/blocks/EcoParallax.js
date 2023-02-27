import React from "react";
import { useTranslation } from "react-i18next";
import bgImage from "../../../assets/img/ecosystems/ecoParallax2.svg";
import Parallax from "../../../components/Parallax/Parallax";

const EcoParallax = () => {
  const { t } = useTranslation();
  return (
    <>
      <Parallax content={t("EcoParallaxText")} img={bgImage} />
    </>
  );
};

export default EcoParallax;
