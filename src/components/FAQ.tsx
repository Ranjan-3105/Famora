"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { q: "Do I need to book an appointment, or are walk-ins welcome?", a: "While we do accept walk-ins, we highly recommend booking an appointment in advance to ensure you don't have to wait and get the preferred time slot and stylist." },
  { q: "What hygiene measures do you follow?", a: "We maintain strict hygiene protocols. All tools are sterilized before each use, fresh disposable towels/capes are used for every client, and our staff sanitizes hands regularly." },
  { q: "Do you offer bridal makeup trials?", a: "Yes, we offer comprehensive bridal makeup trials. It's the best way to discuss your vision, test different looks, and ensure everything is perfect for your big day." },
  { q: "Are your hair and skin products safe for kids?", a: "Absolutely. We use specialized, gentle, and chemical-free products for all our kids' services to ensure their delicate skin and hair are protected." },
  { q: "What is your cancellation policy?", a: "We kindly request at least a 24-hour notice for cancellations or rescheduling. This helps us manage our appointments and accommodate other clients." },
  { q: "Do you provide customized packages for families or groups?", a: "Yes! We offer great combo deals for families and groups (like bridal parties). Contact us directly via WhatsApp to get a customized quote." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <h2 className="heading-2">Frequently Asked Questions</h2>
        <p className="subtitle">Got questions? We've got answers.</p>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
            >
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                {faq.q}
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div 
                className={styles.faqAnswer}
                style={{ maxHeight: openIndex === index ? "200px" : "0" }}
              >
                <div className={styles.faqAnswerInner}>
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
