import React, { useState } from "react";
import BoardItem from "./BoardItem";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

import styles from "./BoardSelectDropdown.module.css";
import Modal from "../UI/Modal/Modal";

const BOARDS = [
    { id: 1, name: "Platform Launch" },
    { id: 2, name: "Marketing Plan" },
    { id: 3, name: "Roadmap" },
];

const BoardSelectDropdown = () => {
    const [boards, setBoards] = useState(BOARDS);

    return (
        <Modal>
            <div className={styles.boardSelect}>
                <p className={styles.boardSelect__title}>
                    All boards ({boards.length})
                </p>
                <ul className={styles.boardSelect__boardList}>
                    {boards.map((el) => {
                        return (
                            <li key={el.id}>
                                <BoardItem>{el.name}</BoardItem>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Modal>
    );
};

export default BoardSelectDropdown;
