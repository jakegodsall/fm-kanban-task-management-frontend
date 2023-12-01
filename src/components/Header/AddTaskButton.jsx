import React, { useState } from "react";

import AddTaskMobile from "../../assets/icon-add-task-mobile.svg";

import styles from "./AddTaskButton.module.css";
import AddTaskModal from "../Modals/AddTaskModal/AddTaskModal";

const AddTaskButton = () => {
    const [addTaskModalOpen, setAddTaskModalOpen] = useState(true);

    const handleOpenTaskModal = () => {
        setAddTaskModalOpen((prevState) => !prevState);
    };

    return (
        <>
            <img
                className={styles.addTaskButton}
                src={AddTaskMobile}
                alt="Add Task Button"
                onClick={handleOpenTaskModal}
            />
            {addTaskModalOpen && <AddTaskModal />}
        </>
    );
};

export default AddTaskButton;
