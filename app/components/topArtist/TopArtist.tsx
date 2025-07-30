import styles from "./TopArtist.module.css";

export default function TopArtist() {
  return (
    <div className={styles.container}>
        <div className={styles.cardsContent}>
            <div className={styles.card}>
                <img src="/eminem.svg" alt="Eminem" />
                <p>Eminem</p>
            </div>
        </div>
    </div>
  );
}