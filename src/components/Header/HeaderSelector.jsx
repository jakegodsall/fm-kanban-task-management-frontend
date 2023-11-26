import React from "react";

import styles from "./HeaderSelector.module.css";

import Chevron from "../../assets/icon-chevron-down.svg";

const HeaderSelector = ({ boardSelectActive, setBoardSelectActive }) => {
    const handleOnClick = () => {
        setBoardSelectActive();
    };

    return (
        <div className={styles.headerSelector} onClick={handleOnClick}>
            <p className={styles.headerSelector__title}>Platform Launch</p>
            <img
                className={
                    boardSelectActive
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
