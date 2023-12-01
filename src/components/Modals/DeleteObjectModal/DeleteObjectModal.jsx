import React from "react";

import styles from "./DeleteObjectModal.module.css";
import Modal from "../../UI/Modal/Modal";

const DeleteObjectModal = ({ title, textContent }) => {
    return (
        <Modal>
            <div className={styles.deleteTaskBox}>
                <p className={styles.deleteTaskBox__title}>{title}</p>
                <p className={styles.deleteTaskBox__textContent}>
                    {textContent}
                </p>
                <div className={styles.deleteTaskBox__buttonSection}>
                    <button className={styles.deleteTaskBox__deleteButton}>
                        Delete
                    </button>
                    <button className={styles.deleteTaskBox__cancelButton}>
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteObjectModal;
