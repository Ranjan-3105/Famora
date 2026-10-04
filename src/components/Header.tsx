"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { Phone, MapPin, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

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
          <Link href="/" className={styles.logo} onClick={closeMenu}>
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
          <button 
            className={styles.mobileMenuBtn} 
            onClick={toggleMenu} 
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNav}>
            <Link href="#services" onClick={closeMenu}>Services</Link>
            <Link href="#bridal" onClick={closeMenu}>Bridal</Link>
            <Link href="#gallery" onClick={closeMenu}>Gallery</Link>
            <Link href="#team" onClick={closeMenu}>Team</Link>
            <Link href="#contact" onClick={closeMenu}>Contact</Link>
            <a href="#book" className="btn btn-primary" onClick={closeMenu} style={{ textAlign: "center", marginTop: "1rem" }}>
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

