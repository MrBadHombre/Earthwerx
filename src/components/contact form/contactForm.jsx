import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

export const LeadConnectorForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      className={styles.cardContainer}
      initial={{ opacity: 0, y: 40 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <div className={styles.outerContainer}>
        <h2 className={styles.heading}>Get a Free Estimate!</h2>
        <iframe
          className={styles.formContainer}
          src="https://api.leadconnectorhq.com/widget/form/3RGL2BLqniY6BMkIq9c9"
        />
      </div>
    </motion.div>
  );
};
