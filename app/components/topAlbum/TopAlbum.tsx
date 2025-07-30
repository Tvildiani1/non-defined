import styles from "./TopAlbum.module.css";

export default function TopAlbum() {
  return (
    <div className={styles.container}>
        <div className={styles.cardsContent}>
            <div className={styles.card}>
                <img src="/selfish.svg" alt="Selfish" />
                <div>
                  <p>Selfish</p>
                  <span>2024 - Album</span>
                </div>
            </div>
        </div>
    </div>
  );
}