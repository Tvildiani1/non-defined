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


    useEffect (() => {
        if (audioRef.current) {
            audioRef.current.load();
            

            if(isPlaying) {
                audioRef.current.play();
            }
        }
    });


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

    ]


    const handlePrev = () => {
        setTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length)
    };


    const handleNext = () => {
        setTrackIndex((prev) => (prev + 1) % tracks.length)
    }
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
                
            </div>

        </div>
    )
}