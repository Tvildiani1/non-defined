"use client";

import Nav from "./components/navigation/nav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div>
        <Nav />
      </div>
    </div>
  );
}
