

import styles from "./QueueCard.module.css";


type QueueCardProps = {
    icon : string;
    artistName : string;
    songName : string;
  };

export function QueueCard ({ songName, artistName,  icon } : QueueCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.songInfo}>
                <img src={icon} alt={songName} className={styles.icon}/>
                <div className={styles.artistInfo}>
                    <p className={styles.songName}> {songName} </p>
                    <p className={styles.artistName}>{artistName} </p>
                </div>
            </div>

            <div className={styles.heartSection}>
                <button className={styles.heartButton}>
                    <img src="/icon/heart.svg" alt="hearticon" className={styles.heartIcon}/>
                </button>
                <button className={styles.dotsButton}>
                    <img src="/icon/dots.svg" alt="dots" className={styles.dotsIcon} />
                </button>

            </div>
        </div>
    )
}