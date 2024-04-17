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
          <p>Brief Description</p>
        </div>
        <div className={styles.service_items}>
          <img
            src='commercial.jpg'
            alt='commercial cleaning'
          />
          <h3>Commercial Cleaning</h3>
          <p>Brief Description</p>
        </div>
        <div className={styles.service_items}>
          <img
            src='deep.jpg'
            alt='deep cleaning'
          />
          <h3>Deep Cleaning</h3>
          <p>Brief Description</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
