import styles from "./Offers.module.css";
import { Gift, Percent, Users } from "lucide-react";

export default function Offers() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="heading-2">Exclusive Offers & Packages</h2>
        <p className="subtitle">
          Enjoy premium services at unbeatable value with our seasonal and special packages.
        </p>

        <div className={styles.grid}>
          <div className={styles.offerCard}>
            <div className={styles.iconWrapper}><Users size={24} /></div>
            <h3 className={styles.title}>Family Combo</h3>
            <p className={styles.desc}>Get a complete styling session for the whole family (2 Adults + 1 Child) and save 20% on the total bill.</p>
            <p className={styles.tnc}>*T&Cs apply. Valid on weekdays only.</p>
          </div>

          <div className={`${styles.offerCard} ${styles.highlighted}`}>
            <div className={styles.iconWrapper}><Gift size={24} /></div>
            <h3 className={styles.title}>First Visit Welcome</h3>
            <p className={styles.desc}>Experience FAMORA for the first time with a complimentary hair spa when you book any facial treatment.</p>
            <p className={styles.tnc}>*T&Cs apply. One-time use per customer.</p>
          </div>

          <div className={styles.offerCard}>
            <div className={styles.iconWrapper}><Percent size={24} /></div>
            <h3 className={styles.title}>Bridal Pre-Booking</h3>
            <p className={styles.desc}>Book your bridal package 3 months in advance and receive a free pre-bridal consultation and 15% off.</p>
            <p className={styles.tnc}>*T&Cs apply. Subject to availability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
