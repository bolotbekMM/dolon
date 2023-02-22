import React from "react";
import { moduleContent } from "../../../utils/data/data";
import css from "./EcoModules.module.scss";

const EcoModules = () => {
  return (
    <div className={css.ecoModules}>
      <div className="container">
        <ul className={css.box}>
          {moduleContent.map((item) => {
            return (
              <li>
                <h3>{item.text}</h3>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EcoModules;
