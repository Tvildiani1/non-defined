'"use client";'

import styles from './page.module.scss';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className={styles.homeContainer}>
      <h1 className={styles.title}>🎵 Welcome to Music Auth App</h1>
      <div className={styles.links}>
        <Link href="/login" className={styles.linkButton}>Login</Link>
        <Link href="/signup" className={styles.linkButton}>Sign Up</Link>
      </div>
    </main>
  )
}

