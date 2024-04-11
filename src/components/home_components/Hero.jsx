import React from "react";
import styles from "./Hero.module.css";
import Button from "../../util/Button";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <img
        src='hero.avif'
        alt='a clean room'
      />
      <div className={styles.hero_text}>
        <h1>Elevate Your Home Elevate Your Life</h1>
        <p>
          At EliteHomeShine, we're dedicated to providing more than just cleaning services. We believe in transforming
          your living space into a sanctuary of comfort and well-being. With meticulous attention to detail and a
          commitment to excellence, our team ensures that every corner of your home radiates cleanliness and freshness.
          Experience the difference with EliteHomeShine and elevate not only your home but your entire lifestyle.
        </p>
        <Button>Get Started!</Button>
      </div>
    </div>
  );
};
export default Hero;
