import styles from "./Team.module.css";
import { Star } from "lucide-react";

const teamMembers = [
  { id: 1, name: "Aisha Sharma", role: "Creative Director", specialty: "Advanced Color & Balayage", exp: "12 Years", rating: 4.9 },
  { id: 2, name: "Rahul Verma", role: "Senior Stylist", specialty: "Precision Cuts & Styling", exp: "8 Years", rating: 4.8 },
  { id: 3, name: "Priya Patel", role: "Lead Aesthetician", specialty: "Advanced Skin Treatments", exp: "10 Years", rating: 4.9 },
  { id: 4, name: "Neha Gupta", role: "Bridal Makeup Artist", specialty: "Airbrush & HD Makeup", exp: "7 Years", rating: 5.0 },
  { id: 5, name: "Vikram Singh", role: "Men's Grooming Expert", specialty: "Classic Fades & Beard Design", exp: "6 Years", rating: 4.7 }
];

export default function Team() {
  return (
    <section id="team" className="section section-alt">
      <div className="container">
        <h2 className="heading-2">Meet Our Experts</h2>
        <p className="subtitle">
          Our team of highly trained professionals is dedicated to bringing your beauty vision to life.
        </p>

        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <div className="img-placeholder" style={{ borderRadius: "var(--radius-md) var(--radius-md) 0 0" }}>
                  <span>[Photo: {member.name}]</span>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <div className={styles.details}>
                  <div className={styles.detailItem}>
                    <strong>Specialty:</strong> {member.specialty}
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Experience:</strong> {member.exp}
                  </div>
                </div>
                <div className={styles.rating}>
                  <Star className={styles.star} size={16} fill="currentColor" /> {member.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
