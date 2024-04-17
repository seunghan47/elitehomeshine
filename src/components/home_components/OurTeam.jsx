import React from "react";
import styles from "./OurTeam.module.css";
import Button from "../../util/Button";

const HowItWorks = () => {
  return (
    <div className={styles.team}>
      <div className={styles.team_text}>
        <h1>Our Team</h1>
        <p>
          At EliteHomeShine, we're more than just a cleaning service – we're your partners in maintaining a pristine
          living and working environment. With our commitment to excellence and attention to detail, we bring a touch of
          luxury to every space we clean.
        </p>
        <p>Want to be part of our cleaning team?</p>
        <Button className={styles.button}>Join our team</Button>
      </div>
      <img
        src='team.jpg'
        alt='cleaning team'
      />
    </div>
  );
};

export default HowItWorks;
