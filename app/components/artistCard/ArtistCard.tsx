'use client'

import styles from './ArtistCard.module.css';

type ArtistCardProps = {
  name: string;
  icon: string;
};

export default function ArtistCard ( { name, icon }: ArtistCardProps) {

  return (
    <div className={styles.card}>
      <img src={icon} alt={name} className={styles.icon}/>
      <h2 className={styles.name}> {name} </h2>
    </div>
  )
}