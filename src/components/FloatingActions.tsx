import styles from "./FloatingActions.module.css";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className={styles.floatingContainer}>
      <a href="tel:7750095333" className={`${styles.actionBtn} ${styles.callBtn}`}>
        <Phone size={24} />
      </a>
      <a href="https://wa.me/917750095333" target="_blank" rel="noreferrer" className={`${styles.actionBtn} ${styles.whatsappBtn}`}>
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
