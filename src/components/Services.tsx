"use client";
import { useState } from "react";
import styles from "./Services.module.css";
import { Scissors, Sparkles, Smile, Baby, Palette } from "lucide-react";

const servicesList = [
  { id: 1, category: "Hair", name: "Haircuts & Styling", icon: <Scissors />, desc: "Precision cuts and modern styling" },
  { id: 2, category: "Hair", name: "Hair Spa & Treatments", icon: <Sparkles />, desc: "Deep nourishment for healthy locks" },
  { id: 3, category: "Hair", name: "Hair Colouring", icon: <Palette />, desc: "Global color, highlights, and balayage" },
  { id: 4, category: "Hair", name: "Hair Wash & Scalp Care", icon: <Sparkles />, desc: "Relaxing wash and scalp rejuvenation" },
  
  { id: 5, category: "Skin", name: "Facial & Skin Treatments", icon: <Smile />, desc: "Glow-enhancing facials for all skin types" },
  { id: 6, category: "Skin", name: "Hydrafacial", icon: <Sparkles />, desc: "Advanced deep cleansing and hydration" },
  { id: 7, category: "Skin", name: "Waxing & Threading", icon: <Sparkles />, desc: "Gentle and hygienic hair removal" },
  
  { id: 8, category: "Nails", name: "Nail Art & Nail Extensions", icon: <Sparkles />, desc: "Creative designs and durable extensions" },
  { id: 9, category: "Nails", name: "Manicure & Pedicure", icon: <Sparkles />, desc: "Complete hand and foot pampering" },
  
  { id: 10, category: "Men's", name: "Men's Grooming", icon: <Scissors />, desc: "Haircuts, beard styling, and facials" },
  { id: 11, category: "Kids'", name: "Kids' Haircuts", icon: <Baby />, desc: "Patient, fun, and safe cuts for little ones" }
];

const categories = ["All", "Hair", "Skin", "Nails", "Men's", "Kids'"];

export default function Services() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredServices = activeTab === "All" 
    ? servicesList 
    : servicesList.filter(s => s.category === activeTab);

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <h2 className="heading-2">Our Premium Services</h2>
        <p className="subtitle">
          Discover our comprehensive range of beauty and grooming services, tailored for every member of the family.
        </p>

        <div className={styles.tabs}>
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`${styles.tabBtn} ${activeTab === cat ? styles.active : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={`grid grid-cols-4 ${styles.servicesGrid}`}>
          {filteredServices.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.serviceName}>{service.name}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
