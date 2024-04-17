import React from "react";
import styles from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header_container}>
      <Link to='/'>
        <img
          src='elitehomeshine.png'
          alt='elitehomeshine logo'
        />
      </Link>
      <nav className={styles.nav}>
        <li>
          <NavLink
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            to='/About'
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            to='/About'
          >
            Who We Are
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            to='/About'
          >
            Our Services
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            className={({ isActive }) => (isActive ? styles.cta : undefined)}
          >
            Book Now!
          </NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Header;
