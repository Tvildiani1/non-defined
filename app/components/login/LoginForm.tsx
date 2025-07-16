'use client';

import React, { useState, useEffect } from 'react';
import styles from './LoginForm.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [borderError, setBorderError] = useState(false);

  useEffect(() => {
    // If already logged in, redirect or console.log
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn) {
      console.log('Already logged in');
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = localStorage.getItem('user');
    if (!userData) {
      setErrorMessage('User not found. Please register.');
      setBorderError(true);
      return;
    }

    const parsed = JSON.parse(userData);
    if (parsed.email !== email) {
      setErrorMessage('Email not registered');
      setBorderError(true);
      return;
    }

    if (parsed.password !== password) {
      setErrorMessage('Incorrect password');
      setBorderError(true);
      return;
    }

    // Success!
    localStorage.setItem('isLoggedIn', 'true');
    setErrorMessage('');
    setBorderError(false);
    alert('Logged in successfully!');
    // Redirect or do something here
  };

  const isFilled = email && password;

  return (
    <div className={`${styles.formContainer} ${isFilled ? styles.purple : ''}`}>
      <Image src="/music.svg" width={102} height={102} alt="Logo" className={styles.logoImage} />
      <h2 className={styles.formTitle}>Login</h2>

      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.formMessage}>
          <input
            type="email"
            placeholder="Enter your Email"
            className={styles.input}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setBorderError(false);
              setErrorMessage('');
            }}
            required
          />
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className={`${styles.input} ${borderError ? styles.error : ''}`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setBorderError(false);
                setErrorMessage('');
              }}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className={styles.togglePassword}>
              <Image src="/visibility.svg" width={24} height={24} alt="Toggle" />
            </span>
          </div>
        </div>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        <div className={styles.formOptions}>
          <label className={styles.formCheckbox}>
            <input type="checkbox" /> Remember me
          </label>
          <Link href="#" className={styles.formForgotPass}>Forgot password?</Link>
        </div>

        <div className={styles.formFooter}>
          <button type="submit" className={styles.formButton}>Login</button>
          <p className={styles.formDontHaveAcc}>
            Don't have an account?{' '}
            <Link className={styles.formSignup} href="/auth/signup">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
