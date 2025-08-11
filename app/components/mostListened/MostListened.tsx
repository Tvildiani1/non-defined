import styles from "./MostListened.module.css";

export default function MostListened() {
    return (
      <>
        <div className={styles.songList}>
          <div>
            <div className={styles.songDetails}>
              <img src="/roddy Ricch.svg" alt="The Box" />
              <p>The Box
              <span>
                Roddy Ricch
              </span>
              </p>
            </div>
            <div className={styles.songRate}>3.24</div>
            <div className={styles.songActions}>
              <img className={styles.imgOne} src="/heart.svg" alt="Heart" />
              <img  className={styles.imgTwo} src="/dots.svg" alt="Esential" />
            </div>
          </div>
        </div>
      </>
    );
}