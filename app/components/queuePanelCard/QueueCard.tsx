import { useState, useEffect, useRef } from "react";
import styles from "./QueueCard.module.css";


type QueueCardProps = {
  icon: string;
  artistName: string;
  songName: string;
  audio: string;
  isLiked?: boolean;           
  onLike?: () => void;
  isPlaying?: boolean;
  onPlayToggle? : () => void;

};

export function QueueCard({ songName, artistName, icon, audio, isLiked = false, onLike, isPlaying, onPlayToggle }: QueueCardProps) {
  const [liked, setLiked] = useState(isLiked);
  const audioRef = useRef<HTMLAudioElement | null > (null);

useEffect ( () => {
    if (!audioRef.current) return;
    if (isPlaying) {
        audioRef.current.play();
    } else  {
        audioRef.current.pause();
    }
}, [isPlaying]);

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
        <div className={styles.iconWrapper}>
            <img src={icon} alt={songName} className={styles.icon}/>
            <button onClick={onPlayToggle} className={styles.playPauseButton}>
                {isPlaying ? (
                    <div className={styles.pauseLines}>
                        <img src="/icon/line1.svg" alt="pause line 1" className={styles.pauseLineOne}/>
                        <img src="/icon/line2.svg" alt="pause line 2" className={styles.pauseLineTwo}/>
                    </div>
                    ) : (
                        <img src="/icon/play.svg" alt="play" className={styles.playIcon} />
                    )}
            </button>
            
        </div>
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
