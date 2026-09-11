import styles from "./WhyChooseUs.module.css";
import { Users, Tag, Award, Sparkles, Heart, ShieldCheck, Map, Smartphone } from "lucide-react";

const usps = [
  { icon: <Users />, title: "Complete Family Salon", desc: "Dedicated services for Women, Men & Kids." },
  { icon: <Tag />, title: "Premium yet Competitive", desc: "Luxury services at highly competitive pricing." },
  { icon: <Award />, title: "Professional Team", desc: "Highly trained and experienced stylists." },
  { icon: <ShieldCheck />, title: "Hygienic Environment", desc: "Sanitized tools and a perfectly clean space." },
  { icon: <Sparkles />, title: "Dedicated Sections", desc: "Specialized zones for bridal and nail art." },
  { icon: <Heart />, title: "Comfortable Experience", desc: "A relaxing ambiance designed for your comfort." },
  { icon: <Map />, title: "Personalized Consultations", desc: "Expert advice before any major service." },
  { icon: <Smartphone />, title: "Easy Booking", desc: "Seamless WhatsApp enquiry & appointments." }
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="heading-2">Why Choose FAMORA?</h2>
        <p className="subtitle">
          Experience the difference of a truly premium family salon where quality meets comfort.
        </p>

        <div className={styles.grid}>
          {usps.map((usp, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{usp.icon}</div>
              <div>
                <h4 className={styles.title}>{usp.title}</h4>
                <p className={styles.desc}>{usp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
