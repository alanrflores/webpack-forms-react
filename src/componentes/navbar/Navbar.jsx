import React from "react";
import { NavLink } from "react-router-dom";
import styles from './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navContainer}>
        <ul className={styles.container}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
