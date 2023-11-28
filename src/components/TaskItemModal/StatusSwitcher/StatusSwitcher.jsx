import React, { useState } from "react";

import styles from "./StatusSwitcher.module.css";
import Dropdown from "../../UI/Dropdown/Dropdown";

const StatusSwitcher = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleIsOpen = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className={styles.statusSwitcher}>
            <p className={styles.statusSwitcher__title}>Current Status</p>
            <Dropdown isOpen={isOpen} setIsOpen={handleIsOpen} />
        </div>
    );
};

export default StatusSwitcher;
