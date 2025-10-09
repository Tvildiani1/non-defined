import styles from "./header.module.css"

export default function Header() {
  return (
    <div className={styles.container}>
        <div>
            <img className={styles.logo} src="/logo.svg" alt="logo" />
        </div>
        <div className={styles.searchHud}>
            <div className={styles.hud}>

                <div className={styles.searchBar}>
                    <div className={styles.searchIcon}><img src="/search.svg" alt="Search" /></div>
                        <input type="text" className={styles.searchInput} />
                        <div className={styles.closeIcon}><img src="/x.svg" alt="X" /></div>
                    </div>
                </div>

                <div className={styles.bellContainer}>
                    <img src="/ring.svg" alt="Notification" />
                    <div className={styles.notificationBadge}></div>
                </div>
            
            </div>
        </div>
    
  );
}
