import styles from "./styles.module.css";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className={styles.mainContainer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.75, duration: 1.2, ease: "easeInOut" }}
      >
        <h1 className={styles.mainHeading}>Who we are</h1>
      </motion.div>
    </div>
  );
};
