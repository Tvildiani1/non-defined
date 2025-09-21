"use client";

import Header from "./components/header/header";
import Nav from "./components/navigation/nav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div>
        <Header />

        <Nav />
      </div>
    </div>
  );
}
