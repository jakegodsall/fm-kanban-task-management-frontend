import React from "react";

import CheckIcon from "../../../assets/icon-check.svg";

import styles from "./SubTaskItem.module.css";

const SubTaskItem = ({ subtask }) => {
    return (
        <div className={styles.subtask}>
            <div
                className={
                    subtask.isCompleted
                        ? `${styles.subtask__checkbox} ${styles.subtask__checkbox_completed}`
                        : styles.subtask__checkbox
                }
            >
                <img
                    className={styles.subtask__checkIcon}
                    src={CheckIcon}
                    alt="check icon"
                />
            </div>
            <p
                className={
                    subtask.isCompleted
                        ? `${styles.subtask__title} ${styles.subtask__title_selected}`
                        : styles.subtask__title
                }
            >
                {subtask.title}
            </p>
        </div>
    );
};

export default SubTaskItem;
