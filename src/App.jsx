import { useState } from "react";

import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Button from "./components/UI/Button/Button";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.mainContainer}>
            <Header />
            <Button>Add New Column</Button>
        </div>
    );
}

export default App;
