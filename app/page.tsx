'"use client";'

import LoginPage from './auth/page';
import Page from './auth/signup/page';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.homeContainer}>
      
      <div>
        <LoginPage />
      </div>
    </main> 
  )
}