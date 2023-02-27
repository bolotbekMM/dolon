import React from "react";
import FirstBlok from "./blocks/FirstBlok";
import FourthBlok from "./blocks/FourthBlok";
import SecondBlok from "./blocks/SecondBlok";
import ThirdBlok from "./blocks/ThirdBlok";
import Unigue from "./blocks/unigue/index";
import Inface from "./blocks/inface/index";
import Slider from "./blocks/slider";
import Carousel from "./blocks/ticker";
import Feedback from './../../components/feedback/index';


const MainPage = () => {
  return (
    <div>
      <FirstBlok />
      <SecondBlok />
      <ThirdBlok />
      <FourthBlok />
      <Unigue />
      <Inface />
      <Slider />
      <Carousel />
      <Feedback question={true} text="Если вам интересен продукт свяжитесь с нами, и мы организуем вам онлайн презентацию" />
    </div>
  );
};

export default MainPage;
