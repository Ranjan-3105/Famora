"use client";
import styles from "./Hero.module.css";
import { MessageCircle, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <h1 className="heading-1 fade-up stagger-1">FAMORA – The Family Salon</h1>
        <h2 className={`heading-2 fade-up stagger-2 ${styles.subhead}`}>
          Beauty for Everyone. Style for Every Generation.
        </h2>
        <p className={`subtitle fade-up stagger-3 ${styles.supporting}`}>
          Premium Hair, Beauty, Skin, Nail & Bridal Services for Women, Men & Kids.
        </p>
        
        <div className={`${styles.actions} fade-up stagger-4`}>
          <a href="#book" className="btn btn-primary">
            <Calendar size={18} /> Book Your Appointment
          </a>
          <a href="https://wa.me/917750095333" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>
      </div>
      
      <div className={styles.trustStrip}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>500+</span>
              <span className={styles.trustLabel}>Happy Families</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>15+</span>
              <span className={styles.trustLabel}>Expert Stylists</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>4.8★</span>
              <span className={styles.trustLabel}>Google Rating</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>100%</span>
              <span className={styles.trustLabel}>Hygienic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
