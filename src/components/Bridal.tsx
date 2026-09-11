import styles from "./Bridal.module.css";
import { Sparkles, Crown } from "lucide-react";

export default function Bridal() {
  return (
    <section id="bridal" className={`section ${styles.bridalSection}`}>
      <div className="container">
        <div className={styles.header}>
          <Crown className={styles.crownIcon} size={40} />
          <h2 className={`heading-2 ${styles.title}`}>The Bridal Lounge</h2>
          <p className={styles.subtitle}>
            Your special day deserves nothing less than absolute perfection. Our dedicated bridal experts ensure you radiate confidence and elegance.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.packageCard}>
            <div className={styles.packageHeader}>
              <h3>Silver Bridal Package</h3>
              <p className={styles.price}>Pre-Bridal Essentials</p>
            </div>
            <ul className={styles.features}>
              <li><Sparkles size={16} /> Basic Facial & Cleanup</li>
              <li><Sparkles size={16} /> Classic Manicure & Pedicure</li>
              <li><Sparkles size={16} /> Full Body Waxing</li>
              <li><Sparkles size={16} /> Hair Spa Treatment</li>
            </ul>
            <a href="#book" className={`btn btn-secondary ${styles.btn}`}>Enquire Now</a>
          </div>

          <div className={`${styles.packageCard} ${styles.featured}`}>
            <div className={styles.featuredLabel}>Most Popular</div>
            <div className={styles.packageHeader}>
              <h3>Gold Bridal Package</h3>
              <p className={styles.price}>Complete Transformation</p>
            </div>
            <ul className={styles.features}>
              <li><Sparkles size={16} /> Signature Hydrafacial</li>
              <li><Sparkles size={16} /> Spa Manicure & Pedicure</li>
              <li><Sparkles size={16} /> HD Bridal Makeup</li>
              <li><Sparkles size={16} /> Advanced Hair Styling</li>
              <li><Sparkles size={16} /> Pre-Bridal Consultation</li>
            </ul>
            <a href="#book" className={`btn btn-primary ${styles.btn}`}>Enquire Now</a>
          </div>

          <div className={styles.packageCard}>
            <div className={styles.packageHeader}>
              <h3>Platinum Package</h3>
              <p className={styles.price}>The Ultimate Luxury</p>
            </div>
            <ul className={styles.features}>
              <li><Sparkles size={16} /> Premium Skin Treatments</li>
              <li><Sparkles size={16} /> Luxury Nail Extensions</li>
              <li><Sparkles size={16} /> Airbrush Bridal Makeup</li>
              <li><Sparkles size={16} /> Custom Hair Design & Accessories</li>
              <li><Sparkles size={16} /> Complimentary Trial Session</li>
            </ul>
            <a href="#book" className={`btn btn-secondary ${styles.btn}`}>Enquire Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
