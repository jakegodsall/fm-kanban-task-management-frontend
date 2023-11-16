import React, {useState} from 'react'

import DarkIcon from "../../assets/icon-dark-theme.svg";
import LightIcon from "../../assets/icon-light-theme.svg";

import styles from "./DarkModeToggle.module.css";


const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const onClickHandler = () => {
        setDarkMode(prevState => !prevState);
    }

  return (
    <div className={styles.darkModeToggle}>
        <img className={styles.darkModeToggle__lightIcon} src={LightIcon} alt="light mode" />
        <input className={styles.darkModeToggle__checkbox} type="checkbox" id="theme-toggle" onClick={onClickHandler} />
        <label className={darkMode ? `${styles.darkModeToggle__toggle}` : `${styles.darkModeToggle__toggle} ${styles.darkModeToggle__toggle_dark}`} htmlFor="theme-toggle"></label>
        <img className={styles.darkModeToggle__darkIcon} src={DarkIcon} alt="dark mode" />
    </div>
  )
}

export default DarkModeToggle