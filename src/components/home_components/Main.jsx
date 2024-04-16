import React from "react";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className={styles.main}>
      <img
        src='cleaning.avif'
        alt='cleaning lady'
      />
      <div>
        <h3>About Us</h3>
        <p>
          At EliteHomeShine, we pride ourselves on delivering top-tier luxury home cleaning and maintenance services.
          With meticulous attention to detail and a dedication to exceeding our clients' expectations, we ensure that
          every corner of your home sparkles with perfection. Our highly trained team utilizes eco-friendly products and
          state-of-the-art techniques to tailor our services to your unique needs, whether you reside in a sprawling
          estate or a cozy apartment. Experience the epitome of cleanliness and sophistication with EliteHomeShine,
          where every clean is an elite experience.
        </p>
      </div>
    </div>
  );
};

export default Main;
