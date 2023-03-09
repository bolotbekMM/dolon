import { Fragment } from "react";
import ReactDom, { createPortal } from "react-dom";
import classes from "./ReModal.module.scss";
import close from "../../assets/icons/headerIcons/close.svg";

const Backdrop = ({ onCloseModal }) => {
  return <div className={classes.backdrop} onClick={onCloseModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <div onClick={props.onCloseModal} className={classes.closeBox}>
          <img src={close} alt="burger" />
        </div>
        {props.children}
      </div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        portalElement
      )}
      {createPortal(
        <ModalOverlay onCloseModal={props.onCloseModal}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
