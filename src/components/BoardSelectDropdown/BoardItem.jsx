import React from 'react'

import BoardIcon from "../../assets/icon-board.svg";

import styles from "./BoardItem.module.css";

const BoardItem = ({children}) => {
  return (
    <div className={styles.boardItem}><img className={styles.boardItem__icon} src={BoardIcon} alt="board" />
        {children}</div>
  )
}

export default BoardItem