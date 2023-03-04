import React from "react";
import Feedback from "../feedback";
import css from "./ReModules.module.scss";

const ReModule = ({ module, banner, title, children }) => {
  console.log(module);
  return (
    <div className={css.reModule}>
      <div
        className={css.banner}
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>
      <div className={css.title}>
        <div className="container">
          <div className={css.box}>
            <h2>{title}</h2>
          </div>
        </div>
      </div>
      <div className={css.content}>{children}</div>
      {module !== "Geology" && (
        <div className={css.shadowEllipsBox}>
          <div className={css.shadowEllips}></div>
        </div>
      )}
      <Feedback />
    </div>
  );
};

export default ReModule;
