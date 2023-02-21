import React from "react";
import FirstBlok from "./blocks/FirstBlok";
import FourthBlok from "./blocks/FourthBlok";
import SecondBlok from "./blocks/SecondBlok";
import ThirdBlok from "./blocks/ThirdBlok";
import Unigue from './blocks/unigue/index';
import Inface from './blocks/inface/index';
import Slider from "./blocks/slider";
import Carousel from "./blocks/ticker";

const MainPage = () => {
  return (
    <div>
      <FirstBlok />
      <SecondBlok />
      <ThirdBlok />
      <Unigue />
      <Inface />
      <Slider />
      <Carousel />
      <FourthBlok />
    </div>
  );
};

export default MainPage;
