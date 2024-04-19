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
                        className={({ isActive }) => (isActive ? styles.active : undefined)}
                        to='/About'
                        end
                    >
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? styles.active : undefined)}
                        to='/Offers'
                        end
                    >
                        Special Offers
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        end
                        className={({ isActive }) => (isActive ? styles.active : undefined)}
                        to='/Services'
                    >
                        Our Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? styles.active : undefined)}
                        to='/Careers'
                        end
                    >
                        Careers
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={styles.cta}
                        to='booking'
                        end
                    >
                        Book Now!
                    </NavLink>
                </li>

                <div className={styles.burgers}>
                    <div className={styles.burger}></div>
                    <div className={styles.burger}></div>
                    <div className={styles.burger}></div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
