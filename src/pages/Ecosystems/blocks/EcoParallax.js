import React from "react";
import bgImage from "../../../assets/img/ecosystems/ecoParallax2.svg";
import Parallax from "../../../components/Parallax/Parallax";

const ecoParallaxText = { text: "Семейство решений dolon" };

const EcoParallax = () => {
  return (
    <>
      <Parallax content={ecoParallaxText.text} img={bgImage} />
    </>
  );
};

export default EcoParallax;
