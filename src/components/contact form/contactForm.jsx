import React, { useEffect } from "react";
import styles from "./styles.module.css";

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
    <div className={styles.outerContainer}>
      <h2 className={styles.heading}>Get a Free Estimate!</h2>
      <iframe
        className={styles.formContainer}
        src="https://api.leadconnectorhq.com/widget/form/3RGL2BLqniY6BMkIq9c9"
      />
    </div>
  );
};
