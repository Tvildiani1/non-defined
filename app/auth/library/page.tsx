"use client";

import React from "react";
import styles from "./page.module.scss";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from "@/app/components/header/header";
import Player from "@/app/components/player/Player";
import Sidebar from "../../components/navigation/nav";

const AuthBox: React.FC = () => {

  const pathname = usePathname();

  const links = [
    { href: "/auth/library", label: "Playlists", icon: "/playlist.svg" },
    { href: "/auth/album", label: "Albums", icon: "/albums.svg" },
    { href: "#", label: "Artist", icon: "/artist.svg" },
  ];

    return (
    <div>
      <Header />

      <div className={styles.main}>

        <Sidebar />

        <div className={styles.center}>

          <div className={styles.player}>
            <Player icon="/roddyRich.svg" artistName="Roddy Ricch" songName="The Box" />
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
    
    </div>
    );
};

export default AuthBox;