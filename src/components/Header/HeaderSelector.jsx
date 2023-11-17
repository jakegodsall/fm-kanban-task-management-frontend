import React, { useState } from "react";

import styles from "./HeaderSelector.module.css";

import Chevron from "../../assets/icon-chevron-down.svg";

const HeaderSelector = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className={styles.headerSelector} onClick={handleOnClick}>
            <p className={styles.headerSelector__title}>Platform Launch</p>
            <img
                className={
                    isOpen
                        ? `${styles.headerSelector__chevron} ${styles.headerSelector__chevron_open}`
                        : `${styles.headerSelector__chevron}`
                }
                src={Chevron}
                alt="open selector button"
            />
        </div>
    );
};

export default HeaderSelector;
