import React, { useState } from "react";

import styles from "./Header.module.css";

import Logo from "../../assets/logo-mobile.svg";
import VerticalEllipsis from "../../assets/icon-vertical-ellipsis.svg";

import HeaderSelector from "./HeaderSelector";
import AddTaskButton from "./AddTaskButton";
import BoardSelectDropdrown from "../BoardSelectDropdown/BoardSelectDropdown";

const Header = () => {
    const [boardSelectActive, setBoardSelectActive] = useState(false);

    const handleOpenBoardSelect = () => {
        setBoardSelectActive((prevState) => !prevState);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__left}>
                    <img
                        className={styles.header__logo}
                        src={Logo}
                        alt="logo"
                    />
                    <HeaderSelector
                        boardSelectActive={boardSelectActive}
                        setBoardSelectActive={handleOpenBoardSelect}
                    />
                </div>
                <div className={styles.header__right}>
                    <AddTaskButton />
                    <img src={VerticalEllipsis} alt="ellipsis" />
                </div>
            </header>
            {boardSelectActive && <BoardSelectDropdrown />}
        </>
    );
};

export default Header;
