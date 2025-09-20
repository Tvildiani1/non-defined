"use client";

import styles from './nav.module.css';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src="/diagrams.svg" alt="open navigation" />
      </div>
      <div className={styles.pages}>
        <Link href="/" className={styles.link}>
          <img className={styles.logo} src="/home.svg" alt="home" />
          <span className={styles.span}>Home</span>
        </Link>
        <Link href="/auth/library" className={styles.link}>
          <img className={styles.logo} src="/library.svg" alt="library" />
          <span className={styles.span}>Library</span>
        </Link>
        <Link href="#" className={styles.link}>
          <img className={styles.logo} src="/create.svg" alt="create" />
          <span className={styles.span}>Create</span>
        </Link>
        <Link href="#" className={styles.link}>
          <img className={styles.logo} src="/addacc.svg" alt="profile" />
          <span className={styles.span}>Profile</span>
        </Link>
        <Link href="#" className={styles.link}>
          <img className={styles.logo} src="/history.svg" alt="history" />
          <span className={styles.span}>History</span>
        </Link>
        <Link href="#" className={styles.link}>
          <img className={styles.logo} src="/setting.svg" alt="settings" />
          <span className={styles.span}>Settings</span>
        </Link>
        <Link href="#" className={styles.link}>
          <img className={styles.logo} src="/about.svg" alt="about" />
          <span className={styles.span}>About</span>
        </Link>
      </div>
    </div>
  );
}
