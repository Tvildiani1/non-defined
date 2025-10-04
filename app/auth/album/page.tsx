"use client"

import Player from "@/app/components/player/Player";
import styles from "./page.module.scss"
import Header from "@/app/components/header/header";
import Sidebar from "@/app/components/navigation/nav";

const AuthBox: React.FC = () => {
return (

    <div>
      <Header />

      <div className={styles.main}>

        <Sidebar />

        <div className={styles.center}>

          <div className={styles.player}>
            <Player icon="/roddyRich.svg" artistName="Roddy Ricch" songName="The Box" />
          </div>

          <div>
            
          </div>
          
        </div>

      </div>

    </div>
    );
};

export default AuthBox;