import styles from './nav.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: "/home.svg" },
    { href: "/auth/library", label: "Library", icon: "/library.svg" },
    { href: "#", label: "Create", icon: "/create.svg" },
    { href: "#", label: "Add new account", icon: "/addacc.svg" },
    { href: "#", label: "History", icon: "/history.svg" },
    { href: "#", label: "Setting", icon: "/setting.svg" },
    { href: "#", label: "About", icon: "/about.svg" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className={styles.container}>
      
      <div className={styles.burger} onClick={toggleMenu}>
        <div className={`${styles.line} ${isOpen ? styles.line1 : ""}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.line2 : ""}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.line3 : ""}`}></div>
      </div>

      <div>
        <img className={styles.logo} src="/diagrams.svg" alt="open navigation" />
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
  );
}
