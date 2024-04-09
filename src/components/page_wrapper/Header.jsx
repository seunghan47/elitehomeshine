import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header_container}>
      <img
        src='elitehomeshine.png'
        alt='elitehomeshine logo'
      />
      <nav className={styles.nav}>
        <li>About Us</li>
        <li>Who We Are</li>
        <li>Our Services</li>
        <li>Book Now!</li>
      </nav>
    </header>
  );
};

export default Header;
