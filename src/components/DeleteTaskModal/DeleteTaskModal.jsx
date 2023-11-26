import React from "react";

import styles from "./DeleteTaskModal.module.css";
import Modal from "../UI/Modal/Modal";

const DeleteTaskModal = () => {
    return (
        <Modal>
            <div className={styles.deleteTaskBox}>
                <p className={styles.deleteTaskBox__title}>Delete this task?</p>
                <p className={styles.deleteTaskBox__textContent}>
                    Are you sure you want to delete the 'Build settings UI' task
                    and its subtasks? This action cannot be reversed.
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

export default DeleteTaskModal;
