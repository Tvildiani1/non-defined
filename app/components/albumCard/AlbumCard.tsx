import styles from './AlbumCard.module.css'

type PopularSongProps = {
    icon : string;
    artistName : string;
    songName : string;
}

export default function AlbumCard ({icon, artistName, songName} : PopularSongProps) {

    return (
        <div className={styles.card}>
            <img src={icon} alt={artistName} className={styles.icon}/>
            <div className={styles.artistDiv}>
                <p className={styles.artistName}> {artistName} </p>
                <p className={styles.songName}> {songName} </p>
            </div>
        </div>
    )
}