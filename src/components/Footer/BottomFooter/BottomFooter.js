import React from "react";
import css from "./BottomFooter.module.scss";
import youtube from "../../../assets/icons/footerIcon/youtube.svg";
import linkedIn from "../../../assets/icons/footerIcon/linkedIn.svg";
import dolon from "../../../assets/icons/footerIcon/Dolon2023.svg";
import daniyar from "../../../assets/icons/footerIcon/DaniyarLogo.svg";

const BottomFooter = () => {
  return (
    <div className={css.bottomFooter}>
      <div className="container">
        <div className={css.box}>
          <div className={css.media}>
            <a target="_blank" href="https://www.linkedin.com/company/dolon">
              <img src={linkedIn} alt="linkedIn" />
            </a>
            <a target="_blank" href="https://www.youtube.com/@dolon.ecosystem">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
          <div className={css.dolon}>
            <img src={dolon} alt="youtube" />
          </div>
          <div className={css.daniyar}>
            <img src={daniyar} alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
