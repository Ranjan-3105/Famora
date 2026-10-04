import React from 'react';
import Image from 'next/image';
import styles from './BookingApp.module.css';

const BookingApp = () => {
  return (
    <section className={`section ${styles.bookingApp}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.card}>
          <div className={styles.logo}>
            <span className={styles.logoF}>F</span>
            <div className={styles.logoText}>
              <h2>FAMORA</h2>
              <p>THE FAMILY SALON</p>
            </div>
          </div>
          
          <h2 className={styles.title}>
            BOOK OUR SERVICES<br />ON YOUR PHONE
          </h2>
          
          <div className={styles.qrWrapper}>
            <div className={styles.qrCode}>
              <Image 
                src="/images/qr-code.png" 
                alt="Scan QR Code" 
                width={180} 
                height={180} 
                className={styles.qrImage}
                priority
              />
            </div>
            <div className={styles.scanBadge}>
              SCAN ME
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.powered}>POWERED BY SALONWINGS SOFTWARE</p>
          <a href="https://WWW.SALONWINGS.COM" target="_blank" rel="noreferrer" className={styles.link}>
            WWW.SALONWINGS.COM
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingApp;
