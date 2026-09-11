import styles from "./Gallery.module.css";
import { Instagram } from "lucide-react";

const galleryItems = [
  { id: 1, title: "Salon Interior", class: styles.tall },
  { id: 2, title: "Hair Transformation", class: "" },
  { id: 3, title: "Bridal Look", class: styles.wide },
  { id: 4, title: "Nail Art", class: "" },
  { id: 5, title: "Facial Glow", class: styles.tall },
  { id: 6, title: "Men's Grooming", class: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2 className="heading-2" style={{ marginBottom: "0.5rem" }}>Our Portfolio</h2>
            <p className="subtitle" style={{ margin: 0, textAlign: "left" }}>
              Glimpses of our premium services and happy clients.
            </p>
          </div>
          <a href="#" className="btn btn-secondary">
            <Instagram size={18} /> Follow on Instagram
          </a>
        </div>

        <div className={styles.masonry}>
          {galleryItems.map((item) => (
            <div key={item.id} className={`${styles.item} ${item.class}`}>
              <div className="img-placeholder" style={{ borderRadius: "var(--radius-md)" }}>
                <span>[{item.title}]</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
