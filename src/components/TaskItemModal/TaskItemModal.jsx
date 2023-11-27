import React from "react";

import styles from "./TaskItemModal.module.css";
import Modal from "../UI/Modal/Modal";
import SubTaskItem from "./SubTaskItem/SubTaskItem";

const TaskItemModal = ({ task }) => {
    console.log(task.subtasks);
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
            <div>
                <p>{task.title}</p>
                <p>{task.description}</p>
                <div>
                    <p>
                        Subtasks ({trueCount} of {falseCount})
                    </p>
                    <ul>
                        {task.subtasks.map((subtask, idx) => {
                            return (
                                <li key={idx}>
                                    <SubTaskItem subtask={subtask} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </Modal>
    );
};

export default TaskItemModal;
