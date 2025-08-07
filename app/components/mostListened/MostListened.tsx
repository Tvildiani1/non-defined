import Link from "next/link";
import styles from "./MostListened.module.css";

export default function MostListened() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.cardRow}>
            <div className={styles.rowCard}>
              <img src="/roddy Ricch.svg" alt="Roddy Ricch" />
              <p>
                The Box
                <br />
                <span>Roddy Ricch</span>
              </p>
            </div>
            <p className={styles.rowCardTitle}>3.24</p>
            <div className={styles.rowCardFavNSetting}>
              <img src="/heart.svg" alt="Heart" />
              <img src="/dots.svg" alt="Esential/Dots" />
            </div>
          </div>
        </div>
      </>
    );
}