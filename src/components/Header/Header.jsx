import React from "react";

import styles from "./Header.module.css";

import Logo from "../../assets/logo-mobile.svg";

import HeaderSelector from "./HeaderSelector";
import AddTaskButton from "./AddTaskButton";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <img className={styles.header__logo} src={Logo} alt="logo" />
                <HeaderSelector />
            </div>
            <div className={styles.header__right}>
                <AddTaskButton />
            </div>
        </header>
    );
};

export default Header;
