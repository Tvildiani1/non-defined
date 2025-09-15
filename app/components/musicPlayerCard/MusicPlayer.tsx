import MusicCard from "../musicCard/MusicCard";
import styles from "./MusicPlayer.module.css";

export default function MusicPlayer() {
    return (
      <>
        <div className={styles.musicPlayer}>
          <div className={styles.leftSection}>
            <MusicCard icon="/eminem.svg" artistName="Unknown Artist" songName="Unknown Song" />
            <p className={styles.albumRate}>
              3.24
            </p>
          </div>
          <div className={styles.rightSection}>
            <img src="heart.svg" alt="Heart" />
            <img src="dots.svg" alt="Options" />
          </div>
        </div>
      </>
    );
}