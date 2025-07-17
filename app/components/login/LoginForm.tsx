'use client';

import React, { useState, useEffect } from 'react';
import styles from './LoginForm.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginForm() {

  return (
    <div className={styles.formContainer}>
      <Image src="/music.svg" width={102} height={102} alt="Logo" className={styles.logoImage} />
      <h2 className={styles.formTitle}>Login</h2>

      <form className={styles.form}>
        <div className={styles.formMessage}>
          <input
            type="email"
            placeholder="Enter your Email"
            className={styles.input}
            required
          />
          <div className={styles.passwordWrapper}>
            <input
              placeholder="Enter your password"
              className={styles.input}
              required
            />
            <span className={styles.togglePassword}>
              <Image className={styles.togglePassword} src="/visibility.svg" width={24} height={24} alt="Toggle" />
            </span>
          </div>
          <label className={styles.formCheckbox}>
            <input type="checkbox" /> Remember me
          </label>
          <Link href="#" className={styles.formForgotPass}>Forgot password?</Link>
        </div>

        <div className={styles.formFooter}>
          <button type="submit" className={styles.formButton}>Login</button>
          <p className={styles.formDontHaveAcc}>
            Don't have an account?{' '}
            <Link className={styles.formSignup} href="#">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}