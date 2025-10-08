import { useState, useEffect } from "react";
import styles from "./QueueCard.module.css";

type QueueCardProps = {
  icon: string;
  artistName: string;
  songName: string;
  isLiked?: boolean;           
  onLike?: () => void;        
};

export function QueueCard({ songName, artistName, icon, isLiked = false, onLike }: QueueCardProps) {
  const [liked, setLiked] = useState(isLiked);

  useEffect(() => {
    setLiked(isLiked); 
  }, [isLiked]);

  const handleClick = () => {
    setLiked((prev) => !prev);  
    if (onLike) onLike();       
  };

  return (
    <div className={styles.card}>
      <div className={styles.songInfo}>
        <img src={icon} alt={songName} className={styles.icon} />
        <div>
          <p className={styles.songName}>{songName}</p>
          <p className={styles.artistName}>{artistName}</p>
        </div>
      </div>

      <div className={styles.heartSection}>
        <button
          className={styles.heartButton}
          onClick={handleClick}
          style={{ backgroundColor: liked ? "#00F5D4" : "rgba(255, 255, 255, 0.25)" }}
        >
          <img src="/icon/heart.svg" alt="hearticon" className={styles.heartIcon} />
        </button>
        <button className={styles.dotsButton}>
          <img src="/icon/dots.svg" alt="dots" className={styles.dotsIcon} />
        </button>
      </div>
    </div>
  );
}
