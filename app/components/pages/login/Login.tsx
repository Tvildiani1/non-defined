'use client';

import React, { useState } from 'react';
import styles from './Login.module.scss';
import Rememberme from '../../remember-me/Rememberme';
import ForgotPass from '../../forgot-pass/ForgotPass';

export default () => {

    return (
        <>
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <h1 className={styles.login}>Login</h1>
            
                <form className={styles.loginForm}>
                    <input className={styles.email} placeholder='Enter your Email' />
                    <input className={styles.password} type='password' placeholder='Enter your Password' />
                    
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