import React from "react";

import SubTaskItem from "../SubTaskItem/SubTaskItem";

import styles from "./SubTaskList.module.css";

const SubTaskList = ({ subtaskList, trueCount, falseCount }) => {
    return (
        <div className={styles.subtaskList}>
            <p className={styles.subtaskList__title}>
                Subtasks ({trueCount} of {falseCount})
            </p>
            <ul className={styles.subtaskList__list}>
                {subtaskList.map((subtask, idx) => {
                    return (
                        <li key={idx}>
                            <SubTaskItem subtask={subtask} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SubTaskList;
