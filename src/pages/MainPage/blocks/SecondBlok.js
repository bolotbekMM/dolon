import React from "react";
import Parallax from "../../../components/Parallax/Parallax";
import bgImage from "../../../assets/img/mainPage/prallax1.svg";

const mainParallaxText = {
  text: "Экосистема, основанная на облачных технологиях (Industry 4.0.)",
};

const SecondBlok = () => {
  return (
    <>
      <Parallax content={mainParallaxText.text} img={bgImage} />
    </>
  );
};

export default SecondBlok;
