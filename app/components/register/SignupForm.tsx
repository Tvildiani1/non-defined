'use client'

import React, { useState } from 'react'
import styles from './SignUpForm.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const handleRegister = (e: React.FormEvent) => {
  e.preventDefault();
  const user = { email, password };
  localStorage.setItem('user', JSON.stringify(user));
  alert('User registered! You can now log in.');
};

  return (
    <div className={styles.formContainer}>
      <Image src="/music.svg" width={102} height={102} alt="Logo" className={styles.logoImage} />
      <h2 className={styles.formTitle}>Sign Up</h2>
      <form className={styles.form}>
        <div className={styles.formMessage}>
          <label className={styles.title} htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className={styles.title} htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className={styles.title} htmlFor="repeatPassword">Repeat Password</label>
          <input
            id="repeatPassword"
            type="password"
            placeholder="Repeat your password"
            className={styles.input}
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles.formOptions}>
          <label className={styles.formCheckbox}>
            <input type="checkbox" /> Remember me
          </label>
        </div>

        <button className={styles.formButton} type="submit">Create Account</button>

        <p className={styles.formDontHaveAcc}>
          Already have an account?{' '}
          <Link className={styles.formLogin} href="/auth/login">Login</Link>
        </p>
      </form>
    </div>
  )
}