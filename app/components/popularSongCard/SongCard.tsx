'use client'

import styles from './SongCard.module.css'

type PopularSongProps = {
    icon : string;
    artistName : string;
    songName : string;
}

export default function PopularCard ({icon, artistName, songName} : PopularSongProps) {

    return (
        <div className={styles.card}>
            <img src={icon} alt={artistName} className={styles.icon}/>
            <p className={styles.songName}> {songName} </p>
            <p className={styles.artistName}> {artistName} </p>
        </div>
    )
}