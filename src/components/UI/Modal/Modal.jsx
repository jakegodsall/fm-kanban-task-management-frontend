import React from "react";

import styles from "./Modal.module.css";

const Modal = ({ children }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__backdrop}></div>
            <div className={styles.modal__contentBox}>{children}</div>
        </div>
    );
};

export default Modal;
