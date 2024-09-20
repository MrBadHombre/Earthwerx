import { div } from "framer-motion/client";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

export const ServicesCarousel = () => {
  const Card = ({ title, delay, imageUrl, description }) => {
    return (
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        className={styles.cardContainer}
        initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.7,
          ease: "easeInOut",
        }}
      >
        <div>{title}</div>
      </motion.div>
    );
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>Services</div>
      <div className={styles.cardOuterContainer}>
        <Card title="test" />
        <Card title="test" />
        <Card title="test" />
      </div>
    </div>
  );
};
