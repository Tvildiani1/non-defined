"use client";

import ArtistCard from "./components/artistCard/ArtistCard";
import Player from "./components/player/Player";
import Header from "./components/header/header";
import MostListened from "./components/mostListened/MostListened";
import Nav from "./components/navigation/nav";
import PopularCard from "./components/popularSongCard/SongCard";
import styles from "./page.module.css";
import AlbumCard from "./components/albumCard/AlbumCard";

export default function Home() {
  return (
    <div>
      <Header />

      <div className={styles.main}>

        <Nav />

        <div className={styles.center}>

          <div className={styles.player}>
            <Player icon="" artistName="" songName="" />
          </div>

          <div className={styles.artistCards}>
            
            
          </div>
          
        </div>

      </div>

       main
      <Player icon="/icon/artist.svg" artistName="The Box" songName="Roddy Ricch" />
    </div>
    
  );
}
