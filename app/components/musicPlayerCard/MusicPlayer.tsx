import styles from "./MusicPlayer.module.css";

export default function MusicPlayer() {
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
            <div className={styles.rowPlayer}>
              <div className={styles.rowCardbuttons}>
                <div className={styles.forwardTime}>
                  <img src="/playforward.svg" alt="Play" />
                </div>
                <div>
                  <img src="/next.svg" alt="Play" />
                </div>
                <div>
                  <img src="/pause.svg" alt="Pause" />
                </div>
                <div className={styles.next}>
                  <img src="/next.svg" alt="Skip" />
                </div>
                <div className={styles.shuffle}>
                  <img src="/shuffle.svg" alt="Shuffle" />
                </div>
              </div>

              <div className={styles.rowCardTime}>
                <p>1:08</p>
                <hr className={styles.hr} />
                <p>3:16</p>
              </div>
            </div>
            <div className={styles.rowCardFavNSetting}>
              <div className={styles.rowCardFavBtn}>
                <img src="/volume.svg" alt="Volume" />
              </div>
              <p>50</p>
            </div>
          </div>
        </div>
      </>
    );
}