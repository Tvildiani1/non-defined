"use client";

import ArtistCard from "./components/artistCard/ArtistCard";
import Header from "./components/header/header";
import MostListened from "./components/mostListened/MostListened";
import Nav from "./components/navigation/nav";
import PopularCard from "./components/popularSongCard/SongCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header />

      <div className={styles.main}>

        <Nav />

        <div className={styles.center}>

          {/* <div className={styles.player}>
            <p>musicplayer</p>
          </div> */}

          <div className={styles.artistCards}>
            <h2 className={styles.h2}>Top Artist</h2>
            <div className={styles.artist}>
              <ArtistCard name="eminem" icon="/eminem.svg" />
              <ArtistCard name="eminem" icon="/eminem.svg" />
              <ArtistCard name="eminem" icon="/eminem.svg" />
              <ArtistCard name="eminem" icon="/eminem.svg" />
              <ArtistCard name="eminem" icon="/eminem.svg" />
              <ArtistCard name="eminem" icon="/eminem.svg" />
              <ArtistCard name="eminem" icon="/eminem.svg" />
              <ArtistCard name="eminem" icon="/eminem.svg" />
            </div>
            
            <h2 className={styles.h2}>Popular Song</h2>
            <div className={styles.artist}>
              <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
              <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
              <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
              <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
              <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
              <PopularCard icon="/abracadabra.svg" artistName="Lady Gaga" songName="Abracadabra" />
            </div>

            <h2 className={styles.h2}>Top Album</h2>
            <div className={styles.artist}>
              <PopularCard icon="/selfish.svg" artistName="2014 - Album" songName="Selfish" />
              <PopularCard icon="/selfish.svg" artistName="2014 - Album" songName="Selfish" />
              <PopularCard icon="/selfish.svg" artistName="2014 - Album" songName="Selfish" />
              <PopularCard icon="/selfish.svg" artistName="2014 - Album" songName="Selfish" />
              <PopularCard icon="/selfish.svg" artistName="2014 - Album" songName="Selfish" />
              <PopularCard icon="/selfish.svg" artistName="2014 - Album" songName="Selfish" />
            </div>

            <h2 className={styles.h2}>Top Artist</h2>
            <div className={styles.artist}>
              <ArtistCard name="Messy" icon="/messy.svg" />
              <ArtistCard name="Messy" icon="/messy.svg" />
              <ArtistCard name="Messy" icon="/messy.svg" />
              <ArtistCard name="Messy" icon="/messy.svg" />
              <ArtistCard name="Messy" icon="/messy.svg" />
              <ArtistCard name="Messy" icon="/messy.svg" />
              <ArtistCard name="Messy" icon="/messy.svg" />
              <ArtistCard name="Messy" icon="/messy.svg" />
            </div>

            <h2 className={styles.h2}>The most listened to hit of the week</h2>
            <div className={styles.cards}>
              <MostListened icon="/roddyRich.svg" artistName="Roddy Rich" songName="The Box" />
              <MostListened icon="/roddyRich.svg" artistName="Roddy Rich" songName="The Box" />
              <MostListened icon="/roddyRich.svg" artistName="Roddy Rich" songName="The Box" />
              <MostListened icon="/roddyRich.svg" artistName="Roddy Rich" songName="The Box" />
              <MostListened icon="/roddyRich.svg" artistName="Roddy Rich" songName="The Box" />
              <MostListened icon="/roddyRich.svg" artistName="Roddy Rich" songName="The Box" />
              <MostListened icon="/roddyRich.svg" artistName="Roddy Rich" songName="The Box" />
            </div>

          </div>
          
        </div>

      </div>

    </div>
    
  );
}
