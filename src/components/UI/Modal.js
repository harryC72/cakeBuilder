import React, { Fragment } from "react";
import Backdrop from "../UI/Backdrop";
import classes from "./Modal.module.css";

const Modal = props => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={props.show ? classes.ModalShow : classes.ModalHide}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
