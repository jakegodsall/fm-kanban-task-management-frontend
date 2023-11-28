import React from "react";

import Chevron from "../../../assets/icon-chevron-up.svg";

import styles from "./Dropdown.module.css";

const Dropdown = ({ isOpen, setIsOpen }) => {
    return (
        <div
            className={
                isOpen
                    ? `${styles.dropdown} ${styles.dropdown__isOpen}`
                    : styles.dropdown
            }
        >
            <div className={styles.dropdown__currentValue}>
                <p className={styles.dropdown__currentValueTitle}>Doing</p>
                <img
                    className={styles.dropdown__currentValueIcon}
                    src={Chevron}
                    alt="change status button"
                />
            </div>
            <ul className={styles.dropdown__list}>
                <li>
                    <input type="checkbox" value="doing" />
                    Doing
                </li>
                <li>
                    <input type="checkbox" value="todo" />
                    Todo
                </li>
                <li>
                    <input type="checkbox" value="done" />
                    Done
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;
