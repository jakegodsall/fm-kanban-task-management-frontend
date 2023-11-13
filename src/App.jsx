import { useState } from "react";

import styles from "./App.module.css";

import Header from "./components/Header/Header";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.mainContainer}>
            <Header />
        </div>
    );
}

export default App;
