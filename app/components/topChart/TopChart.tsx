import styles from "./TopChart.module.css";

export default function TopChart() {
  return (
    <div className={styles.container}>
      <div className={styles.cardsContent}>
        <div className={styles.card}>
          <img src="/messy.svg" alt="Messy" />
          <p>Messy</p>
        </div>
      </div>
    </div>
  );
}