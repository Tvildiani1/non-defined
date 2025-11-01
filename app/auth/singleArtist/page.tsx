"use client";

import styles from "./page.module.scss";
import Nav from "../../components/navigation/nav";
import Header from "@/app/components/header/header";
import Player from "@/app/components/player/Player";
import ForSinglePages from "@/app/components/singlePage/SongCard";

export default function singleArtistPage() {

    return (

    <div>
      <Header />

      <div className={styles.main}>

        <Nav />

        <div className={styles.center}>

          <div className={styles.player}>
            <Player icon="/roddyRich.svg" artistName="Roddy Ricch" songName="The Box" />
          </div>

          <div className={styles.pageCenterHead}>
            <div>
              <img src="/Depecheedom.svg" alt="" />
            </div>

            <div className={styles.pageCenterHeadText}>

              <div className={styles.songName}>
                <p>Momento Mori</p>
                <span>Depeche Mode</span>
              </div>
              <div className={styles.centerBtns}>
                <img className={` ${styles.download} ${styles.btn}`} src="/download.svg" alt="Download" />
                <img className={` ${styles.Add} ${styles.btn}`} src="/addMsc.svg" alt="Add" />
                <img className={` ${styles.options} ${styles.btn}`} src="/dots.svg" alt="options" />
                <img className={` ${styles.shuffle} ${styles.btn}`} src="/icon/shuffle.svg" alt="Shuffle" />
                <img className={` ${styles.playBtn} ${styles.btn}`} src="/icon/play.svg" alt="Play" />
              </div>
            </div>
            
          </div>
          <p className={styles.hr}></p>

          <div>
            <ForSinglePages />
            <ForSinglePages />
            <ForSinglePages />
            <ForSinglePages />
          </div>
          
        </div>

      </div>

    </div>
    );
};

