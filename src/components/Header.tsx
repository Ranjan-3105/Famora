import Link from "next/link";
import styles from "./Header.module.css";
import { Phone, MapPin, Menu, X } from "lucide-react";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.contactItem}>
            <MapPin size={14} /> Near Forum Galleria Mall, Civiltownship, Rourkela
          </div>
          <div className={styles.contactItem}>
            <Phone size={14} /> 7750095333
          </div>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <div className={`container ${styles.mainHeaderInner}`}>
          <Link href="/" className={styles.logo}>
            FAMORA
          </Link>
          <nav className={styles.nav}>
            <Link href="#services">Services</Link>
            <Link href="#bridal">Bridal</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#team">Team</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <div className={styles.actions}>
            <a href="#book" className="btn btn-primary">Book Now</a>
          </div>
          <button className={styles.mobileMenuBtn}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
