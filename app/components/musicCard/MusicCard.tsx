'use client'

import styles from './MusicCard.module.css';

type MusicCardProps = {
    icon : string;
    artistName : string;
    songName : string;
};

export default function MusicCard ( { artistName, songName, icon }: MusicCardProps) {

  return (
    <div className={styles.card}>
            <img src={icon} alt={artistName} className={styles.icon}/>
            <div className={styles.artistDiv}>
                <p className={styles.songName}> {songName} </p>
                <p className={styles.artistName}> {artistName} </p>
            </div>
        </div>
  )
}