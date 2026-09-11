import styles from "./Reviews.module.css";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.widgetContainer}>
          <div className={styles.header}>
            <div className={styles.brand}>
              <div className={styles.googleIcon}>G</div>
              <div>
                <h3 className={styles.title}>FAMORA - The Family Salon</h3>
                <div className={styles.aggregate}>
                  <span className={styles.rating}>4.8</span>
                  <div className={styles.stars}>
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className={i < 4 ? styles.starFilled : styles.starHalf} />
                    ))}
                  </div>
                  <span className={styles.count}>(124 reviews)</span>
                </div>
              </div>
            </div>
            <a href="#" className="btn btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}>Write a Review</a>
          </div>

          <div className={styles.placeholderNotice}>
            <p>[Embedded Google Reviews Widget Placeholder]</p>
            <p className={styles.sub}>In production, this area will load a live Google Reviews widget (e.g., Elfsight or similar) to stream 4.8★+ reviews directly from your Google Business Profile.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
