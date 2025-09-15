'use client';

import ArtistCard from "./components/artistCard/ArtistCard";
import MusicPlayer from "./components/musicPlayerCard/MusicPlayer";
import PopularCard from "./components/popularSongCard/SongCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>heading</h2>
      <div className={styles.main}>
        <div>
          <h1 className={styles.h1}>Top Artist</h1>
          <div className={styles.artistGrid}>
            <ArtistCard name="eminem" icon="/eminem.svg" />
            <ArtistCard name="eminem" icon="/eminem.svg" />
            <ArtistCard name="eminem" icon="/eminem.svg" />
            <ArtistCard name="eminem" icon="/eminem.svg" />
            <ArtistCard name="eminem" icon="/eminem.svg" />
            <ArtistCard name="eminem" icon="/eminem.svg" />
            <ArtistCard name="eminem" icon="/eminem.svg" />
          </div>
        </div>
        <div>
          <h1 className={styles.h1}>Popular Song</h1>
          <div className={styles.artistGrid}>
            <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
            <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
            <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
            <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
            <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
            <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
            <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
          </div>
        </div>
        <div>
          <h1 className={styles.h1}>Top Album</h1>
          <div className={styles.artistGrid}>
            <PopularCard icon="/selfish.svg" artistName="Unknown Artist" songName="Unknown Song" />
            <PopularCard icon="/selfish.svg" artistName="Unknown Artist" songName="Unknown Song" />
            <PopularCard icon="/selfish.svg" artistName="Unknown Artist" songName="Unknown Song" />
            <PopularCard icon="/selfish.svg" artistName="Unknown Artist" songName="Unknown Song" />
            <PopularCard icon="/selfish.svg" artistName="Unknown Artist" songName="Unknown Song" />
            <PopularCard icon="/selfish.svg" artistName="Unknown Artist" songName="Unknown Song" />
            <PopularCard icon="/selfish.svg" artistName="Unknown Artist" songName="Unknown Song" />
          </div>
        </div>
        <div>
          <h1 className={styles.h1}>Top Charm</h1>
          <div className={styles.artistGrid}>
            <ArtistCard name="Messy" icon="/messy.svg" />
            <ArtistCard name="Messy" icon="/messy.svg" />
            <ArtistCard name="Messy" icon="/messy.svg" />
            <ArtistCard name="Messy" icon="/messy.svg" />
            <ArtistCard name="Messy" icon="/messy.svg" />
            <ArtistCard name="Messy" icon="/messy.svg" />
            <ArtistCard name="Messy" icon="/messy.svg" />
          </div>
        </div>
        <div>
          <h1 className={styles.h1}>The most listened to hit of the week</h1>
        </div>
        <div className={styles.musicPlayerCards}>
          <MusicPlayer />
          <MusicPlayer />
          <MusicPlayer />
          <MusicPlayer />
          <MusicPlayer />
          <MusicPlayer />
          <MusicPlayer />
          <MusicPlayer />
        </div>
      </div>
    </div>
  );  
}