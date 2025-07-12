'use client';

import React, { useState } from 'react';
import styles from './Register.module.scss';
import Rememberme from '../../remember-me/Rememberme';
import ForgotPass from '../../forgot-pass/ForgotPass';

export default () => {

    return (
        <>
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <h1 className={styles.login}>Sign up</h1>
            
                <form className={styles.loginForm}>
                    <div className={styles.wrapper}>
                        <div className={styles.emailWrapper}>
                            <label className={styles.emailLabel}>Email</label>
                            <input className={styles.email} type='email' placeholder='Enter your Email' />
                        </div>
                        <div className={styles.passwordWrapper}>
                            <label className={styles.passLabel}>Password</label>
                            <input className={styles.password} type='password' placeholder='Enter your Password' />
                        </div>
                        <div className={styles.passwordWrapper}>
                            <label className={styles.passLabel}>Confirm Password</label>
                            <input className={styles.password} type='password' placeholder='Confirm your Password' />
                        </div>
                    </div>

                    
                    
                </form>
                <div className={styles.rememberForgot}>
                    <Rememberme />
                    <ForgotPass />
                </div>
            </div>
            <button className={styles.submit} type="submit">Login</button>
        </div>
        </>
    );
}