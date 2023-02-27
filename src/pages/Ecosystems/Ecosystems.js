import React from "react";
import Feedback from "../../components/feedback";
import EcoContent from "./blocks/EcoContent";
import EcoHead from "./blocks/EcoHead";
import EcoModules from "./blocks/EcoModules";
import EcoParallax from "./blocks/EcoParallax";
import EcoPlashka from "./blocks/EcoPlashka";

const Ecosystems = () => {
  return (
    <>
      <EcoHead />
      <EcoContent />
      <EcoParallax />
      <EcoModules />
      <EcoPlashka />
      <Feedback
        block={true}
        question={true}
        text="Если вы хотите получить более подробную информацию свяжитесь с нами"
      />
    </>
  );
};

export default Ecosystems;
