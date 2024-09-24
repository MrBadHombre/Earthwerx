import { motion } from "framer-motion";
import { Hero } from "./components/hero/hero";
import { ServicesCarousel } from "./components/servicesCarousel/servicesCarousel";
import { About } from "./components/about/about";
import { LeadConnectorForm } from "./components/contact form/contactForm";
import styles from "./app css/styles.module.css";
import "./index.css";

function App() {
  return (
    <>
      <div className={styles.siteBackground}>
        {/* <Navbar /> */}
        <Hero />
        {/* <ServicesCarousel /> */}
        <About />
        <LeadConnectorForm />
      </div>
    </>
  );
}

export default App;
