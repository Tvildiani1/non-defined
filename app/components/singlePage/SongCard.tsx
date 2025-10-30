import MusicCard from '../musicCard/MusicCard';
import styles from './SongCard.module.css'

export default function ForSinglePages() {

    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <MusicCard icon="/roddyRich.svg" artistName="Roddy Rich" songName="The Box" />
                <p className={styles.musicRating}>
                    3.24
                </p>
            </div>
            <div className={styles.actionIcons}>
                <img src="/heart.svg" alt="Heart" className={styles.heart}/>
                <img src="/dots.svg" alt="Dots" className={styles.dots}/>
           </div>
        </div>
    )
}