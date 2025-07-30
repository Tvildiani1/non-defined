import styles from "./PopularSong.module.css";

export default function PopularSong() {
  return (
    <div className={styles.container}>
        <div className={styles.cardsContent}>
            <div className={styles.card}>
                <img src="/abracadabra.svg" alt="Abracadabra" />
                <div>
                  <p>Abracadabra</p>
                  <span>Lady Gaga</span>
                </div>
            </div>
        </div>
    </div>
  );
}