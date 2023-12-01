import React, { useState } from "react";

import styles from "./StatusSwitcher.module.css";
import Dropdown from "../../UI/Dropdown/Dropdown";

const DUMMY_OPTIONS = [
    {
        name: "status",
        value: "doing",
        textContent: "Doing",
    },
    {
        name: "status",
        value: "todo",
        textContent: "Todo",
    },
    {
        name: "status",
        value: "done",
        textContent: "Done",
    },
];

const StatusSwitcher = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleIsOpen = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className={styles.statusSwitcher}>
            <p className={styles.statusSwitcher__title}>Current Status</p>
            <Dropdown
                isOpen={isOpen}
                setIsOpen={handleIsOpen}
                options={DUMMY_OPTIONS}
            />
        </div>
    );
};

export default StatusSwitcher;
