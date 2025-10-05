"use client";

import React from "react";
import styles from "./page.module.scss";
import Nav from "../../components/navigation/nav";
import Header from "@/app/components/header/header";
import Player from "@/app/components/player/Player";

const AuthBox: React.FC = () => {
    return (
    <div>
        
        <Header />

        <div className={styles.main}>
            <Nav />
        </div>
        <div className={styles.rightSide}>
            
            <div className={styles.player}>
                <Player icon="roddyRich.svg" artistName="Roddy Ricch" songName="The Box" />
            </div>

        </div>
    </div>
    );
};

export default AuthBox;