'use client'

import styles from './MostListened.module.css'

type PopularSongProps = {
    icon : string;
    artistName : string;
    songName : string;
}

export default function MostListened ({icon, artistName, songName} : PopularSongProps) {

    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <img src={icon} alt={artistName} className={styles.icon}/>
                    <div className={styles.textContainer}>
                        <p className={styles.songName}> {songName} </p>
                        <p className={styles.artistName}> {artistName} </p>
                    </div>
                </div>
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