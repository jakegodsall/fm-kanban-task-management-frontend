import { useState } from "react";

import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Button from "./components/UI/Button/Button";
import BoardSelectDropdown from "./components/BoardSelectDropdown/BoardSelectDropdown";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.mainContainer}>
            <Header />
            <BoardSelectDropdown />
        </div>
    );
}

export default App;
