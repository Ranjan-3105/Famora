import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <div className={styles.image}>
            <Image src="/images/interior.png" alt="Salon Interior" fill style={{ objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
          <div className={styles.experienceBadge}>
            <span className={styles.badgeNumber}>10+</span>
            <span className={styles.badgeText}>Years of Excellence</span>
          </div>
        </div>
        
        <div className={styles.contentCol}>
          <h2 className="heading-2" style={{ textAlign: "left", marginBottom: "1.5rem" }}>
            The Ultimate Luxury Experience for Your Entire Family
          </h2>
          <p className={styles.text}>
            Welcome to FAMORA, Rourkela's premier destination for holistic beauty and grooming. 
            We believe that luxury should be accessible to everyone, which is why we've created a space 
            where women, men, and kids can all experience world-class services under one roof.
          </p>
          <p className={styles.text}>
            From the moment you step into our hygienic, beautifully designed salon, our team of trained 
            professionals is dedicated to making you feel pampered and valued. Whether it's a transformative 
            hair color, a rejuvenating hydrafacial, or an intricate bridal makeup session, we blend top-tier 
            products with personalized consultations to ensure you leave looking and feeling your absolute best.
          </p>
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✨</div>
              <div>
                <h4 className={styles.featureTitle}>Premium Quality</h4>
                <p className={styles.featureDesc}>Using only the best products</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>👨‍👩‍👧‍👦</div>
              <div>
                <h4 className={styles.featureTitle}>Family Friendly</h4>
                <p className={styles.featureDesc}>Dedicated sections for everyone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
