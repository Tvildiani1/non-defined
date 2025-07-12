'use client';

import styles from './ForgotPass.module.scss'

export default () => {
    return (
        <div className={styles.forgotPassContainer}>
            <a href="/forgot-password" className={styles.forgotPass}>
            Forgot password? 
            </a>
        </div>
    );
}