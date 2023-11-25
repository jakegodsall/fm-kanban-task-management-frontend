import React from "react";
import TaskItem from "./TaskItem";

import styles from "./TaskList.module.css";

const TaskList = ({ section, tasks }) => {
    return (
        <div className={styles.taskList}>
            <p
                className={styles.taskList__title}
            >{`${section} (${tasks.length})`}</p>
            <ul className={styles.taskList__list}>
                {tasks.map((task, idx) => {
                    return (
                        <li key={idx}>
                            <TaskItem task={task} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TaskList;
