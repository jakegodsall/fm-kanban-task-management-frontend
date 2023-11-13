import React from "react";

import styles from "./HeaderSelector.module.css";

import Chevron from "../../assets/icon-chevron-down.svg";

const HeaderSelector = () => {
    return (
        <div className={styles.headerSelector}>
            <p className={styles.headerSelector__title}>Platform Launch</p>
            <img
                className={styles.headerSelector__chevron}
                src={Chevron}
                alt="open selector button"
            />
        </div>
    );
};

export default HeaderSelector;
