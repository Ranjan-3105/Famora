"use client";
import styles from "./Location.module.css";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

export default function Location() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your request! (This is a stub, in production it will submit to Google Sheets). We will contact you shortly to confirm your appointment.");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="heading-2">Visit Us & Book an Appointment</h2>
        <p className="subtitle">
          We're located in the heart of Rourkela. Drop by or schedule your next visit below.
        </p>

        <div className={styles.grid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <ul className={styles.infoList}>
                <li>
                  <MapPin className={styles.icon} size={20} />
                  <span>Near Forum Galleria Mall,<br/>Civiltownship, Rourkela</span>
                </li>
                <li>
                  <Phone className={styles.icon} size={20} />
                  <span>7750095333</span>
                </li>
                <li>
                  <Mail className={styles.icon} size={20} />
                  <span>info@famorasalon.com</span>
                </li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Opening Hours</h3>
              <ul className={styles.infoList}>
                <li>
                  <Clock className={styles.icon} size={20} />
                  <span>Monday - Sunday<br/>10:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>

            <div className={styles.mapContainer}>
              {/* Embedded Google Maps Placeholder */}
              <iframe 
                src="https://maps.google.com/maps?q=Civil%20Township,%20Rourkela,%20Odisha&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="FAMORA Location"
              ></iframe>
            </div>
          </div>

          <div id="book" className={styles.formContainer}>
            <h3 className={styles.formTitle}>Request an Appointment</h3>
            <p className={styles.formDesc}>Fill out the form below and we will confirm your slot.</p>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" id="name" required className={styles.input} placeholder="Enter your full name" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number (WhatsApp)</label>
                <input type="tel" id="phone" required className={styles.input} placeholder="Enter your phone number" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.label}>Service Required</label>
                <select id="service" required className={styles.input}>
                  <option value="">Select a service category</option>
                  <option value="Hair">Haircut & Styling</option>
                  <option value="Skin">Facial & Skin Treatments</option>
                  <option value="Bridal">Bridal Package</option>
                  <option value="Nails">Nail Art & Extensions</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="date" className={styles.label}>Preferred Date & Time</label>
                <input type="datetime-local" id="date" required className={styles.input} />
              </div>
              
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                <Calendar size={18} /> Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
