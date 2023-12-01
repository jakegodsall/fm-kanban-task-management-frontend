import React from "react";

import styles from "./DropdownItem.module.css";

const DropdownItem = ({ name, value, children }) => {
    return (
        <>
            <input
                className={styles.dropdownItem__input}
                type="radio"
                name={name}
                value={value}
                id={value}
            />
            <label className={styles.dropdownItem__label} htmlFor={value}>
                {children}
            </label>
        </>
    );
};

export default DropdownItem;
