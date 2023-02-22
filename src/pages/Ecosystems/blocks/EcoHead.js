import React from "react";
import css from "./EcoHead.module.scss";

const EcoHead = () => {
  return (
    <div className={css.ecosystems}>
      <div className={css.box}>
        <div className={css.contetnt}>
          <h2>Технология бережливого майнинга</h2>
        </div>
        <div className={css.emptyBox}></div>
      </div>
    </div>
  );
};

export default EcoHead;
