import styles from "./styles.module.css";
import { motion } from "framer-motion";
import logo from "../../../public/Earthwerx-logo-white.png";

export const About = () => {
  return (
    <div className={styles.mainContainer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img src={logo} alt="earthwerx logo" className={styles.logo} />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className={styles.mainHeading}>
          We have been serving the Northstate's construction needs for over 20
          years. Whether you need junk hauling, full building demolition, or lot
          clearing and excavation you can count on Earthwerx to take care of it!
        </div>
      </motion.div>
    </div>
  );
};
