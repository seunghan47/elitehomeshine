import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Contact</h3>
        <p>(123)-456-7890</p>
        <p>limun@gmail.com</p>
        <p>
          1234 bojangles Unit 2219 <br />
          Brookhaven GA 31909
        </p>
      </div>
      <div>
        <h3>About us</h3>
        <p>NZ</p>
        <p>Polim</p>
        <p>Our Cleaners</p>
        <p>Our Lawyer</p>
      </div>
      <div>
        <h3>Services</h3>
        <p>Residential Cleaning</p>
        <p>Commercial Cleaning</p>
        <p>Basic Cleaning</p>
        <p>Detail Cleaning</p>
      </div>
      <div>
        <h3>Social Media</h3>
        <p>Google</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
    </footer>
  );
};

export default Footer;
