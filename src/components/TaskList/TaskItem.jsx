import React from "react";

import styles from "./TaskItem.module.css";

const TaskItem = ({ task }) => {
    console.log(task);

    const numSubTasks = task.subtasks.length;
    const numCompleteSubTasks = task.subtasks.reduce(
        (count, item) => (item.isCompleted ? count + 1 : count),
        0,
    );

    return (
        <div className={styles.taskItem}>
            <p className={styles.taskItem__title}>{task.title}</p>
            <p className={styles.taskItem__status}>
                {numCompleteSubTasks} of {numSubTasks} subtasks
            </p>
        </div>
    );
};

export default TaskItem;
