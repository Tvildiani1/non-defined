'use client';

import styles from './Rememberme.module.scss';

export default () => {
    return (
        <div className={styles.rememberMeContainer}>
            <label className={styles.rememberMe}>
                <input className={styles.input} type="checkbox" name="rememberMe" />
                <p className={styles.text}>Remember me</p>
            </label>
        </div>
    );
}