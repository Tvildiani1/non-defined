import styles from "./MusicPlayer.module.css";

export default function MusicPlayer() {
    return (
      <>
        <div className={styles.player}>
          <div className={styles.playerLeft}>
            <img src="/roddy Ricch.svg" alt="The Box" />
            <p>
              The Box
              <span>Roddy Ricch</span>
            </p>
          </div>

          <div className={styles.playerCenter}>
            <div className={styles.playerNavigation}>
              <img src="/playForward.svg" alt="PlayForward" />
              <img src="/next.svg" alt="Play" />
              <img src="/pause.svg" alt="play" />
              <img className={styles.rotated} src="/next.svg" alt="next" />
              <img src="/shuffle.svg" alt="Shuffle" />
            </div>
            <div className={styles.playerTime}>
              1:29
              <input type="range" min="0" max="100" value="50" />
              3:46
            </div>
          </div>

          <div className={styles.playerRight}>
            <img src="/volume.svg" alt="" />
            <input type="range" min="0" max="100" value="50" />
            <p>50</p>
          </div>
        </div>
      </>
    );
}