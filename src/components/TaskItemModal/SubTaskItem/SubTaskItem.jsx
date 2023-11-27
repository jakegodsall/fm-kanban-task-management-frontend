import React from "react";

import styles from "./SubTaskItem.module.css";

const SubTaskItem = ({ subtask }) => {
    return (
        <div>
            <p>{subtask.title}</p>
        </div>
    );
};

export default SubTaskItem;
