import React from "react";
import styles from "./AboutUs.module.css";
import Button from "../../util/Button";
const AboutUs = () => {
  return (
    <div className={styles.main}>
      <img
        src='cleaning.avif'
        alt='cleaning lady'
      />
      <div>
        <h1>About Us</h1>
        <p>
          At EliteHomeShine, we pride ourselves on delivering top-tier luxury home cleaning and maintenance services.
          With meticulous attention to detail and a dedication to exceeding our clients' expectations, we ensure that
          every corner of your home sparkles with perfection. Our highly trained team utilizes eco-friendly products and
          state-of-the-art techniques to tailor our services to your unique needs, whether you reside in a sprawling
          estate or a cozy apartment. Experience the epitome of cleanliness and sophistication with EliteHomeShine,
          where every clean is an elite experience.
        </p>
        <Button className={styles.btn}>Find out more</Button>
      </div>
    </div>
  );
};

export default AboutUs;
