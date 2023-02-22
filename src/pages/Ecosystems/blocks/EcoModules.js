import React from "react";
import { Link } from "react-router-dom";
import { moduleContent } from "../../../utils/data/data";
import css from "./EcoModules.module.scss";

const EcoModules = () => {
  return (
    <div className={css.ecoModules}>
      <div className="container">
        <div className={css.box}>
          {moduleContent.map((item, index) => {
            return (
              <Link to={item.pathName} key={index} className={css.link}>
                <h3>{item.text}</h3>
                <p>{item.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EcoModules;
