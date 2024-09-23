import { div } from "framer-motion/client";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

export const ServicesCarousel = () => {
  const Card = ({ title, cardDelay, imageUrl, description }) => {
    return (
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        className={styles.cardContainer}
        initial={{ opacity: 0, y: 40 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: cardDelay,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <div className={styles.cardTitle}>{title}</div>
      </motion.div>
    );
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>Services</div>
      <div className={styles.cardOuterContainer}>
        <Card title="Hauling and Cleanup" cardDelay={0} />
        <Card title="Excavation" cardDelay={0} />
        <Card title="Demolition" cardDelay={0} />
      </div>
    </div>
  );
};
