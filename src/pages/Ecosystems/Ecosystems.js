import React from "react";
import { useTranslation } from "react-i18next";
import Feedback from "../../components/feedback";
import EcoContent from "./blocks/EcoContent";
import EcoHead from "./blocks/EcoHead";
import EcoModules from "./blocks/EcoModules";
import EcoParallax from "./blocks/EcoParallax";
import EcoPlashka from "./blocks/EcoPlashka";

const Ecosystems = () => {
  const { t, i18n } = useTranslation();
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
        text={t("contuctUs.ecoContuctUsText")}
      />
    </>
  );
};

export default Ecosystems;
