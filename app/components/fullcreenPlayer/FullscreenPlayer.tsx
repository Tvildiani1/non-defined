"use client";

import { useState,useRef, useEffect } from "react";
import styles from "./FullscreenPlayer.module.css";
import Link from "next/link";



export function FullscreenPlayer()  {

    const [isQueueOpen, setIsQueueOpen] = useState(false);
    const [queueStyle, setQueueStyle] = useState({ top: 0, left: 0 });
    const queueButtonRef = useRef<HTMLButtonElement>(null);

    const toggleQueue = () => {
        if (queueButtonRef.current) {
            const rect = queueButtonRef.current.getBoundingClientRect();
            setQueueStyle({
                top: rect.top,
                left: rect.right, 
            });
        }
        setIsQueueOpen(prev => !prev);
    };

  return (
    <div className={styles.main}>
        <div className={styles.playerHeader}>
            <button className={styles.backButton}>
                <img src="/icon/ChevronLeftOutline.svg" alt="back" className={styles.backIcon} />
            </button>

            <span className={styles.nowPlayingTitle}>Now Playing</span>

            <div className={styles.playerHeaderRight}>
                <button className={styles.dotsButton}>
                    <img src="/icon/dots.svg" alt="dots"  className={styles.dotsIcon}/>
                </button>

                <button className={styles.queueButton} onClick={toggleQueue}>
                    <img src="/icon/queue.svg" alt="queue" className={styles.queueIcon}/>
                </button>
            </div>

        </div>
    
        {/* Queue panel */}
        <div className={`${styles.queuePanel} ${isQueueOpen ? styles.open : ""}`}>
                {/* queue content */}
            </div>
        
    </div>
  );
}
