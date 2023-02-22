import React from "react";
import { ecoInfo, ecoInfoBlocks } from "../../../utils/data/data";
import css from "./EcoContent.module.scss";

const EcoContent = () => {
  return (
    <div className={css.ecoContent}>
      <div className="container">
        <div className={css.box}>
          <div className={css.firstBox}>
            <p>{ecoInfo.text}</p>
          </div>
          <div className={css.secondBox}>
            <div className={css.line}></div>
            <ul>
              {ecoInfoBlocks.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoContent;
