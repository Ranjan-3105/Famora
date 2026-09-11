import styles from "./Testimonials.module.css";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { id: 1, name: "Simran K.", service: "Bridal Makeup", rating: 5, quote: "FAMORA made my wedding day truly magical. The makeup was flawless, stayed all night, and the team made me feel so relaxed. Highly recommend their bridal services!" },
  { id: 2, name: "Rohan D.", service: "Men's Grooming & Haircut", rating: 5, quote: "Best salon in Rourkela hands down. The hygiene standards are top-notch and the stylists actually listen to what you want. My go-to place now." },
  { id: 3, name: "Meera M.", service: "Hydrafacial", rating: 5, quote: "I tried the Hydrafacial and my skin has never felt this hydrated and glowing. The ambiance is so luxurious and calming." },
  { id: 4, name: "Pooja & Amit", service: "Family Combo", rating: 4, quote: "We came here for our anniversary styling. They managed my hair color and my husband's grooming perfectly. Even our daughter got a cute haircut!" }
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="heading-2">What Our Clients Say</h2>
        <p className="subtitle">
          Don't just take our word for it. Here are some experiences from our wonderful clients.
        </p>

        <div className={styles.grid}>
          {testimonials.map((test) => (
            <div key={test.id} className={styles.card}>
              <Quote className={styles.quoteIcon} size={32} />
              <div className={styles.rating}>
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className={styles.quoteText}>"{test.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className={styles.name}>{test.name}</h4>
                  <p className={styles.service}>{test.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
