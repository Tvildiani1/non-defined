"use client";


import Player from "./components/player/Player";
import Nav from "./components/navigation/nav";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.main}>
      <div>
        <Nav />
      </div>
       main
      <Player icon="/icon/artist.svg" songName="The Box"  artistName="Roddy Ricch" />
    </div>
    
  );
}
