import React from "react";

import styles from "./TaskItemModal.module.css";
import Modal from "../UI/Modal/Modal";

import Ellipsis from "../../assets/icon-vertical-ellipsis.svg";
import SubTaskList from "./SubTaskList/SubTaskList";
import StatusSwitcher from "./StatusSwitcher/StatusSwitcher";

const TaskItemModal = ({ task }) => {
    task.subtasks[0].isCompleted = true;

    let trueCount = 0;
    let falseCount = 0;

    task.subtasks.reduce((accumulator, task) => {
        if (task.isCompleted === true) {
            trueCount++;
        } else {
            falseCount++;
        }
    }, 0);

    return (
        <Modal>
            <div className={styles.taskItemModal}>
                <div className={styles.taskItemModal__titleContainer}>
                    <p className={styles.taskItemModal__title}>{task.title}</p>
                    <img src={Ellipsis} alt="ellipsis button" />
                </div>
                <p className={styles.taskItemModal__description}>
                    {task.description}
                </p>
                <SubTaskList
                    subtaskList={task.subtasks}
                    trueCount={trueCount}
                    falseCount={falseCount}
                />
                <StatusSwitcher />
            </div>
        </Modal>
    );
};

export default TaskItemModal;
