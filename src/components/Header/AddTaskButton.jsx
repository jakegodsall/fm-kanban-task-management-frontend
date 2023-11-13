import React from "react";

import AddTaskMobile from "../../assets/icon-add-task-mobile.svg";

import styles from "./AddTaskButton.module.css";

const AddTaskButton = () => {
    return (
        <img
            className={styles.addTaskButton}
            src={AddTaskMobile}
            alt="Add Task Button"
        />
    );
};

export default AddTaskButton;
