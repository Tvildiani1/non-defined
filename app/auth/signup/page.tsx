'use client'

import styles from '../components/register/page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function SignupForm() {

  return (
    <div className={styles.formContainer}>
      <Image src="/music.svg" width={102} height={102} alt="Logo" className={styles.logoImage} />
      <h2 className={styles.formTitle}>Sign Up</h2>
      <form className={styles.form}>
        <div className={styles.formMessage}>
          <label className={styles.title} htmlFor="email">Email</label>
          <div className={styles.passwordWrapper}>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={styles.input}
              required
            />

            <label className={styles.title} htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className={styles.input}
              required
            />
            <span className={styles.toggleIcon}>
              <Image src="/visibility.svg" width={24} height={24} alt="Toggle" />
            </span>
          </div>
          <div className={styles.passwordWrapper}>
            <label className={styles.title} htmlFor="repeatPassword">Repeat Password</label>
            <input
              id="repeatPassword"
              type="password"
              placeholder="Repeat your password"
              className={styles.input}
              required
            />
            <span className={styles.togglePassword}>
              <Image src="/visibility.svg" width={24} height={24} alt="Toggle" />
            </span>
          </div>
        </div>

        <div className={styles.formOptions}>
          <label className={styles.formCheckbox}>
            <input type="checkbox" /> Remember me
          </label>
        </div>

        <button className={styles.formButton} type="submit">Create Account</button>

        <p className={styles.formDontHaveAcc}>
          Already have an account?{' '}
          <Link className={styles.formLogin} href="#">Login</Link>
        </p>
      </form>
    </div>
  )
}