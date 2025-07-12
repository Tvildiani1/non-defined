'use client';

import styles from './DontHaveAcc.module.scss';

export default () => {
    return (
        <div className={styles.dontHaveAcc}>
            <p>Don't have an account?</p>
            <a className={styles.signUp} href='../pages/RegisterPage/Page.tsx'>Sign up</a>
        </div>
    );
}