import React from "react";
import css from "./DialogueStatus.module.scss";
import SuccessIcon from "../../assets/icons/headerIcons/success.svg";
import ErrorIcon from "../../assets/icons/headerIcons/error.png";

const DialogueStatus = ({ message }) => {
  return (
    <div className={css.dialogueStatus}>
      <div className={css.title}>
        {message.icon === "ok" ? (
          <img src={SuccessIcon} alt="successIcon" />
        ) : (
          <img src={ErrorIcon} alt="successIcon" />
        )}
        <h3>{message.first}</h3>
      </div>
      <p>{message.second}</p>
      <span>{message.third}</span>
    </div>
  );
};

export default DialogueStatus;
