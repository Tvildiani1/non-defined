'use client';

import MostListened from "./components/mostListened/MostListened";
import PopularSong from "./components/popularSong/PopularSong";
import TopAlbum from "./components/topAlbum/TopAlbum";
import TopArtist from "./components/topArtist/TopArtist";
import TopChart from "./components/topChart/TopChart";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.heading}>heading</div>
      <div className={styles.container}>
        <p className={styles.frstTitle}>Top Artist</p>
        <div className={styles.cardsTitle}>
          <div className={styles.cards}>
            <TopArtist />
          </div>

          <div className={styles.cards}>
            <TopArtist />
          </div>
        </div>

        <div>
          <p className={styles.scndTitle}>Popular Song</p>
        </div>
        <div className={styles.cardsTitle}>
          <div className={styles.cards}>
            <PopularSong />
          </div>

          <div className={styles.cards}>
            <PopularSong />
          </div>
        </div>
        <div>
          <p className={styles.scndTitle}>Top Albums</p>
          <div className={styles.cardsTitle}>
            <div className={styles.cards}>
              <TopAlbum />
            </div>

            <div className={styles.cards}>
              <TopAlbum />
            </div>
          </div>
          <div>
            <p className={styles.thrdTitle}>Top Chart</p>
            <div className={styles.cardsTitle}>
              <div className={styles.cards}>
                <TopChart />
              </div>

              <div className={styles.cards}>
                <TopChart />
              </div>
            </div>
          </div>
          <p className={styles.thrdTitle}>
            The most listened to hit of the week
          </p>
          <div className={styles.rowCards}>
            <div>
              <MostListened />
            </div>

            <div>
              <MostListened />
            </div>
            
            <div>
              <MostListened />
            </div>
            
            <div>
              <MostListened />
            </div>
            
            <div>
              <MostListened />
            </div>
            
            <div>
              <MostListened />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}