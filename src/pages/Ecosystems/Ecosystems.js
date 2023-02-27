import React from "react";
import Hero from "../../components/hero";
import EcoContent from "./blocks/EcoContent";
import EcoHead from "./blocks/EcoHead";
import EcoModules from "./blocks/EcoModules";
import EcoParallax from "./blocks/EcoParallax";
import EcoPlashka from "./blocks/EcoPlashka";
import failmenager from "../../assets/img/mainPage/failmenager.png";

const Ecosystems = () => {
  return (
    <>
      <EcoHead />
      <EcoContent />
      <EcoParallax />
      <EcoModules />
      <EcoPlashka />
    </>
  );
};

export default Ecosystems;
