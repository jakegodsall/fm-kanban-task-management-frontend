import { useState } from "react";

import styles from "./App.module.css";

import Header from "./components/Header/Header";
import BoardSection from "./components/BoardSection/BoardSection";
import DeleteObjectModal from "./components/DeleteObjectModal/DeleteObjectModal";

const deleteTask = {
    title: "Delete this task?",
    textContent:
        "Are you sure you want to delete the 'Build settings UI' task and its subtasks? This action cannot be reversed.",
};

const deleteBoard = {
    title: "Delete this board?",
    textContent:
        "Are you sure you want to delete the 'Platform Launch' board? This action will remove all columns and tasks and cannot be reversed.",
};

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.mainContainer}>
            <Header />
            <BoardSection />
            {/* <DeleteObjectModal
                title={deleteTask.title}
                textContent={deleteTask.textContent}
            /> */}
            {/* <DeleteObjectModal
                title={deleteBoard.title}
                textContent={deleteBoard.textContent}
            /> */}
        </div>
    );
}

export default App;
