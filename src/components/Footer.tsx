import Link from "next/link";
import styles from "./Footer.module.css";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.col}>
          <h3 className={styles.logo}>FAMORA</h3>
          <p className={styles.desc}>
            Beauty for Everyone. Style for Every Generation. The ultimate luxury family salon experience in Rourkela.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
            <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
          </div>
        </div>
        
        <div className={styles.col}>
          <h4 className={styles.heading}>Quick Links</h4>
          <nav className={styles.nav}>
            <Link href="#about">About Us</Link>
            <Link href="#services">Services</Link>
            <Link href="#bridal">Bridal Packages</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#faq">FAQs</Link>
          </nav>
        </div>
        
        <div className={styles.col}>
          <h4 className={styles.heading}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={16} /> Near Forum Galleria Mall, Civiltownship, Rourkela
            </li>
            <li>
              <Phone size={16} /> 7750095333
            </li>
            <li>
              <Mail size={16} /> info@famorasalon.com
            </li>
          </ul>
        </div>
        
        <div className={styles.col}>
          <h4 className={styles.heading}>Working Hours</h4>
          <ul className={styles.hoursList}>
            <li>
              <Clock size={16} /> Mon - Sun: 10:00 AM - 8:00 PM
            </li>
            <li>
              (Open All Days)
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} FAMORA – The Family Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
