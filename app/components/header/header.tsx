'use client';

import styles from './header.module.css';
import Link from 'next/link';
import { useState } from 'react';




export default function Header ()  {
    const [query, setQuery] = useState('');
    return (
    <div className={styles.container}>

        <div className={styles.header}>
            
            <Link href='#' className={styles.note}>
                <img src="/icon/Note.svg" alt="note" />
            </Link>

            <div className={styles.headerLibrary}>
                <Link href='#' className={styles.homee}>
                    <img src="/icon/Home, House.svg" alt="home" className={styles.homeImg}/>
                </Link>
                <Link href='#' className={styles.library}>
                    <img src="/icon/Play, Library, Playlist.svg" alt="library" className={styles.homeImg}/>
                </Link>
            </div>
            
            
        </div>
        <div className={styles.box}>
            
            <div className={styles.searchBox}>
                <div className={styles.searchInput}>
                    <img src="/icon/search.svg" alt="search" className={styles.searchImg} />
                    <input className={styles.search}
                        type='text'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <img src="/icon/X.svg" alt="x" className={styles.xImg}/>
                </div>
            </div>


            <div className={styles.profileBox}>
                <Link href='#' className={styles.notificationBox}>
                    <img src="/icon/notification.svg" alt="notification" className={styles.notification} />
                </Link>


            </div>
                
            

        </div>

    </div>
    )

}