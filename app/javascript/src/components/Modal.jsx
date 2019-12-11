import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <>
      <div className={styles.modal}></div>
      <div className={styles.card}>{children}</div>
    </>,
    document.getElementById("modal-root")
  );
export default Modal;
