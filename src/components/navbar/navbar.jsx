import styles from "./styles.module.css";
import { motion } from "framer-motion";

export const Navbar = () => {
  const Navlink = ({ text }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 2, ease: "easeInOut" }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 1 }}
      >
        <h3 className={styles.navBarText}>{text}</h3>
      </motion.div>
    );
  };

  return (
    <div className={styles.navBar}>
      <Navlink text={"HOME"} />
      <Navlink text={"SERVICES"} />
      <Navlink text={"ABOUT"} />
      <Navlink text={"CONTACT"} />
    </div>
  );
};

{
  /* <h3 className={styles.navBarText}>HOME</h3>
<h3 className={styles.navBarText}>SERVICES</h3>
<h3 className={styles.navBarText}>ABOUT</h3>
<h3 className={styles.navBarText}>CONTACT</h3> */
}
