'use client'

import React, { useState } from 'react'
import styles from './Login.module.scss'
import Image from 'next/image'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    const isValid = value.length >= 8 && /[A-Z]/.test(value)
    setError(!isValid)
  }

  const isFilled = email && password

  return (
    <div className={`${styles.formContainer} ${isFilled ? styles.purple : ''}`}>
      <Image src="/music.svg" width={102} height={102} alt="Logo" className={styles.logoImage} />
      <h2 className={styles.formTitle}>Login</h2>
      <form className={styles.form}>
        <div className={styles.formMessage}>
          <input
            type="email"
            placeholder="Enter your Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className={`${styles.input} ${error ? styles.error : ''}`}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className={styles.togglePassword}
            >
              <Image className={styles.passwordIcon} src="/visibility.svg" width={24} height={24} alt="Toggle" />
            </span>
          </div>
        </div>
        {error && <p className={styles.errorMessage}>Minimum 8 characters and 1 uppercase letter required</p>}

        <div className={styles.formOptions}>
          <label className={styles.formCheckbox}>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className={styles.formForgotPass}>Forgot password?</a>
        </div>
        <div className={styles.formFooter}>
          <button type="submit" className={styles.formButton}>Login</button>
          <p className={styles.formDontHaveAcc}>
            Don't have an account? <a className={styles.formSignup} href="/signup">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  )
}
