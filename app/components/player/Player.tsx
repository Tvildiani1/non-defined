'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Player.module.css'




type MusicCardProps = {
    icon : string;
    artistName : string;
    songName : string;
};


export default function Player ( {icon, artistName, songName} : MusicCardProps) {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const [volume, setVolume] = useState(1);



    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [isPlaying, trackIndex]);

    useEffect(() => {
        if (audioRef.current) {
          audioRef.current.volume = volume;
        }
      }, [volume]);


    const handlePlayPause = () => {
        if (!audioRef.current) return;

        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };


    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };




    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = Number(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    


    const tracks = [
        '/Audio/track1.mp3',
        '/Audio/tracks2.mp3',
        '/Audio/track3.mp3',
        '/Audio/track4.mp3'
    ]


    const handlePrev = () => {
        setTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length)
    };


    const handleNext = () => {
        setTrackIndex((prev) => (prev + 1) % tracks.length)
    }

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
          audioRef.current.volume = newVolume;
        }
      };

      const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
      };

      const handleLoadMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration)
        }
      }

      
      const handleForward = () => {
        if(audioRef.current) {
            audioRef.current.currentTime = Math.min(audioRef.current.currentTime +5, duration);
        }
      };


      

      
    return (
        <div className={styles.main}>
            <div className={styles.artDiv}>
                <img src={icon} alt={artistName} className={styles.iconArt}/>
                <div className={styles.nameDiv}>

                    <p className={styles.songName}> {songName} </p>
                    <p className={styles.artistName}> {artistName} </p>

                </div>
            </div>
            <div className={styles.playerDiv}>
                <div className={styles.iconButton}>
                    <div className={styles.forwardClk}>
                        <button onClick={handleForward} className={styles.buttonForward}>
                        <img src="/icon/rotate.svg" alt="forward" className={styles.iconForward} />
                        <span className={styles.five}> 5 </span>
                        </button>
                    </div>
                    <div className={styles.prevNext}>
                        <div className={styles.prevDiv}>
                            <button onClick={handlePrev} className={styles.prevBttn}>
                                <img src='/icon/prev.svg' alt="previcon"  className={styles.prevIcon}/>
                            </button>
                        </div>
                        <div className={styles.playPause}>
                            <button onClick={handlePlayPause} className={styles.playBttn}>
                                {isPlaying ? (
                                <div className={styles.lineDiv}>
                                    <img src="/icon/line1.svg" alt="pause line 1" className={styles.lineOne}/>
                                    <img src="/icon/line2.svg" alt="pause line 2" className={styles.lineTwo}/>
                                </div>
                                ) : (
                                <img src="/icon/play.svg" alt="play" />
                                )}
                            </button>
                        </div>

                        <div className={styles.prevDiv}>
                            <button onClick={handleNext} className={styles.prevBttn}> 
                                <img src='/icon/next.svg' alt="nexticon" className={styles.prevIcon} />
                            </button>    
                        </div>
                    </div>

                    <div className={styles.prevDiv}>
                        <button className={styles.prevBttn}> 
                            <img src='/icon/shuffle.svg' alt="nexticon" className={styles.prevIcon} />
                         </button>    
                    </div>
                    
                </div>
                <div className={styles.timeInput}>
                    <audio 
                        ref={audioRef}
                        src={tracks[trackIndex]}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadMetadata}
                    />
                    
                    <input type="range"
                    className={styles.rangeInput}
                    min={0}
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                    step={0.1}/>
                    
                    <div className={styles.spanTime}>
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                    
                    
                </div>


            </div>

            <div className={styles.volumeDiv}>
                <img src='/icon/volume.svg' alt="volume" className={styles.volumeIcon}/>
                <input
                    className={styles.volumeChange}
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                />
                <span>
                    {Math.round(volume * 100)} 
                </span>
                
            </div>
            

        </div>
    )
}