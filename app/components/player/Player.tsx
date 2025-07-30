'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Player.module.css'
import { PlayIcon, PrevIcon, NextIcon, PauseIcon } from './icon';


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


    const handleLoadMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration)
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
        '/Audio/tracks2.mp3'
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
    return (
        <div className={styles.main}>
            <div className={styles.artDiv}>
                <img src={icon} alt={artistName} className={styles.icon}/>
                <div className={styles.nameDiv}>

                    <p className={styles.songName}> {songName} </p>
                    <p className={styles.artistName}> {artistName} </p>

                </div>
            </div>
            <div className={styles.playerDiv}>
                <div className={styles.iconButton}>
                    <div>
                        <button onClick={handlePrev} className={styles.prevIcon}> <PrevIcon /> </button>
                    </div>
                    <div>
                        <button onClick={handlePlayPause} > 
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}  
                        </button>
                    </div>
                    <div>
                        <button onClick={handleNext}> <NextIcon /> </button>    
                    </div>
                </div>
                <div>
                    <audio 
                        ref={audioRef}
                        src={tracks[trackIndex]}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadMetadata}
                    />
                    <input
                        type='range' 
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                        step={0.1}
                    />
                    <div className={styles.timeInput}>
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>


            </div>
            <div>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                />
                
            </div>

        </div>
    )
}