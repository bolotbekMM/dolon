import React from "react";
import css from "./EcoHead.module.scss";

const EcoHead = () => {
  return (
    <div className={css.ecosystems}>
      <div className={css.box}>
        <div className={css.emptyBox}></div>
        <div className="container">
          <div className={css.contetnt}>
            <h2>Lean mining</h2>
            <h2>technology</h2>
          </div>
        </div>
        {/* <div className={css.contetnt}></div> */}
      </div>
    </div>
  );
};

export default EcoHead;
