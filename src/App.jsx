import { useState } from "react";

import styles from "./App.module.css";

import Header from "./components/Header/Header";
import BoardSection from "./components/BoardSection/BoardSection";
import DeleteTaskModal from "./components/DeleteTaskModal/DeleteTaskModal";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.mainContainer}>
            <Header />
            <BoardSection />
            <DeleteTaskModal />
        </div>
    );
}

export default App;
