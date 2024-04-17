import React from "react";
import styles from "./Services.module.css";
const Services = () => {
  return (
    <div className={styles.services}>
      <h1>Our Services</h1>
      <div className={styles.service_container}>
        <div className={styles.service_items}>
          <img
            src='residential.jpg'
            alt='residential cleaning'
          />
          <h3>Residential Cleaning</h3>
          <p>
            we specialize in meticulous residential cleaning services tailored to elevate the cleanliness and comfort of
            your home. Our dedicated team ensures every corner is thoroughly cleaned and maintained, providing a
            hygienic environment for you and your family to enjoy.
          </p>
        </div>
        <div className={styles.service_items}>
          <img
            src='commercial.jpg'
            alt='commercial cleaning'
          />
          <h3>Commercial Cleaning</h3>
          <p>
            For businesses and commercial establishments, EliteHomeShine offers professional cleaning services designed
            to create a welcoming and professional atmosphere. Our commercial cleaning team focuses on high-traffic
            areas, delivering exceptional cleanliness that leaves a positive impression on employees and clients alike.
          </p>
        </div>
        <div className={styles.service_items}>
          <img
            src='deep.jpg'
            alt='deep cleaning'
          />
          <h3>Deep Cleaning</h3>
          <p>
            Our deep cleaning service goes beyond the surface, targeting hidden dirt and grime to restore freshness and
            cleanliness to any space. Our comprehensive approach ensures every surface and fixture receives the
            attention it deserves, rejuvenating the environment and leaving it sparkling clean.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
