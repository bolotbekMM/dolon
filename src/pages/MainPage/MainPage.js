import React from "react";
import FirstBlok from "./blocks/FirstBlok";
import FourthBlok from "./blocks/FourthBlok";
import SecondBlok from "./blocks/SecondBlok";
import ThirdBlok from "./blocks/ThirdBlok";
import Unigue from "./blocks/unigue/index";
import Inface from "./blocks/inface/index";
import Slider from "./blocks/slider";
import Carousel from "./blocks/ticker";
import Feedback from "./../../components/feedback/index";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t, i18n } = useTranslation();
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
      <Feedback
        block={true}
        question={true}
        text={t("contuctUs.mainContuctUsText")}
      />
    </div>
  );
};

export default MainPage;
