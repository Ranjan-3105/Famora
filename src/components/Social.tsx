import styles from "./Social.module.css";
import { Instagram } from "lucide-react";

export default function Social() {
  return (
    <section className={`section ${styles.socialSection}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="heading-2" style={{ marginBottom: "0.5rem" }}>Follow Us on Instagram</h2>
          <p className="subtitle" style={{ marginBottom: "2rem" }}>@famorasalon</p>
        </div>

        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className={styles.post}>
              <div className="img-placeholder" style={{ borderRadius: 0 }}>
                <span>[IG Post {item}]</span>
              </div>
              <div className={styles.overlay}>
                <Instagram size={32} />
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.actions}>
          <a href="#" className="btn btn-primary">
            <Instagram size={18} /> View Full Profile
          </a>
        </div>
      </div>
    </section>
  );
}
