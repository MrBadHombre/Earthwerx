import { motion } from "framer-motion";
import { Hero } from "./components/hero/hero";
import { ServicesCarousel } from "./components/servicesCarousel/servicesCarousel";
import { About } from "./components/about/about";
import { Navbar } from "./components/navbar/navbar";
import styles from "./app css/styles.module.css";
import "./index.css";

function App() {
  return (
    <>
      <div className={styles.siteBackground}>
        {/* <Navbar /> */}
        <Hero />
        <About />
        {/* <ServicesCarousel /> */}
      </div>
    </>
  );
}

export default App;
