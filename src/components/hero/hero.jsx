import { Navbar } from "../navbar/navbar";
import logo from "../../../public/Earthwerx-logo-white.png";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
      >
        <div className={styles.outerContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          >
            <div className={styles.titleBlock}>
              <img src={logo} className={styles.heroLogo} />
              <div className={styles.heroTitle}>EARTHWERX</div>
            </div>
          </motion.div>
          <div className={styles.textBlock}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }}
            >
              <h1 className={styles.heroTagline}>
                Whether junk or dirt, we are the experts at moving it!
              </h1>
            </motion.div>
          </div>
          <div className={styles.buttonContainer}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            >
              <motion.a
                href="tel:9494339441"
                className={styles.getQuoteButton}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 1 }}
              >
                Give us a call
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1.2, ease: "easeInOut" }}
            >
              <motion.a
                className={styles.servicesButton}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 1 }}
              >
                Our Servcies
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
