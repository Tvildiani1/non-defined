'use client';

import styles from './DontHaveAcc.module.scss';

export default () => {
    return (
        <div className={styles.dontHaveAcc}>
            <p>Already have an account</p>
            <a className={styles.signUp} href="../pages/LoginPage/Page.tsx">Login</a>
        </div>
    );
}