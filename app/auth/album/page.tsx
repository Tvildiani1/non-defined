"use client";

import React from "react";
import styles from "./page.module.scss";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Nav from "../../components/navigation/nav";
import Header from "@/app/components/header/header";
import Player from "@/app/components/player/Player";
import PopularCard from "@/app/components/popularSongCard/SongCard";

const AuthBox: React.FC = () => {

  const pathname = usePathname();

  const links = [
    { href: "#", label: "Playlists", icon: "/playlist.svg" },
    { href: "/auth/album", label: "Albums", icon: "/albums.svg" },
    { href: "#", label: "Artist", icon: "/artist.svg" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
    <div>
      <Header />

      <div className={styles.main}>

        <Nav />

        <div className={styles.center}>

          <div className={styles.player}>
            <Player icon="/roddyRich.svg" artistName="Roddy Ricch" songName="The Box" />
          </div>

          <div>
            <div className={styles.container}>

              <div onClick={toggleMenu}>
                <div className={`${styles.line} ${isOpen ? styles.line1 : ""}`}></div>
                <div className={`${styles.line} ${isOpen ? styles.line2 : ""}`}></div>
                <div className={`${styles.line} ${isOpen ? styles.line3 : ""}`}></div>
              </div>

              <div className={styles.pages}>
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}>
                    <img className={styles.image} src={link.icon} alt={link.label} />
                    <span className={styles.span}>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          <div className={styles.albums}>
            <PopularCard icon="/selfish.svg" artistName="Selfish" songName="2014 - Album" />
            <PopularCard icon="" artistName="" songName="" />
            <PopularCard icon="" artistName="" songName="" />
            <PopularCard icon="" artistName="" songName="" />
          </div>
          
        </div>

      </div>

    </div>
    );
};

export default AuthBox;