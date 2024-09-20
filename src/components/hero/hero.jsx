import { Navbar } from "../navbar/navbar";

import styles from "./styles.module.css";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
      >
        <div className={styles.outerContainer}>
          <div className={styles.heroContainer}>
            <div className={styles.heroInnerContainer}>
              <div className={styles.textBlock}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
                >
                  <div className={styles.heroTitle}>EARTHWERX</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 1.2, ease: "easeInOut" }}
                >
                  <h1 className={styles.heroTagline}>
                    We are your trusted partner for professional excavation,
                    demolition, and junk removal with a strong track record
                  </h1>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
              >
                <motion.button
                  className={styles.getQuoteButton}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 1 }}
                >
                  Get in touch
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
