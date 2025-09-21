"use client";

import Nav from "./components/navigation/nav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.h1}>heading</h1>

      <div className={styles.main}>

        <Nav />

        <div className={styles.center}>
            <h2>Top Artist</h2>
          </div>
        </div>
    </div>
  );
}
