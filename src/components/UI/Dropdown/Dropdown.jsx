import React from "react";

import Chevron from "../../../assets/icon-chevron-down.svg";

import styles from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem/DropdownItem";

const Dropdown = ({ isOpen, setIsOpen, options }) => {
    const handleCurrentValueClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div
            className={
                isOpen
                    ? `${styles.dropdown} ${styles.dropdown__isOpen}`
                    : styles.dropdown
            }
        >
            <div
                className={styles.dropdown__currentValue}
                onClick={handleCurrentValueClick}
            >
                <p className={styles.dropdown__currentValueTitle}>Doing</p>
                <img
                    className={styles.dropdown__currentValueIcon}
                    src={Chevron}
                    alt="change status button"
                />
            </div>
            <ul className={styles.dropdown__list}>
                {options.map((option) => {
                    return (
                        <li className={styles.dropdown__item}>
                            <DropdownItem
                                name={option.name}
                                value={option.value}
                            >
                                {option.textContent}
                            </DropdownItem>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Dropdown;
