import styles from "./Gallery.module.css";
import { Instagram } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  { id: 1, title: "Salon Interior", class: styles.tall, image: "/images/interior.png" },
  { id: 2, title: "Hair Transformation", class: "", image: "/images/hair.png" },
  { id: 3, title: "Bridal Look", class: styles.wide, image: "/images/bridal.png" },
  { id: 4, title: "Nail Art", class: "", image: "/images/nail.png" },
  { id: 5, title: "Facial Glow", class: styles.tall, image: "/images/facial.png" },
  { id: 6, title: "Men's Grooming", class: "", image: "/images/mens.png" },
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
            <div key={item.id} className={`${styles.item} ${item.class}`} style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
              <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
