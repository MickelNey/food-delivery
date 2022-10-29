import styles from './Navigation.module.scss';
import React from "react";
import { NavLink } from "react-router-dom";

const setActive = ({isActive}: any ) => ({
    color: isActive ? 'var(--primary-default)' : ''
})

export const Navigation = () => {
  return (<>
    <nav className={`${styles.nav} ${styles.nav_container}`}>
        <NavLink
          className={styles.nav_item}
          style={setActive}
          to="main">Restaurants
        </NavLink>
        <NavLink
          className={styles.nav_item}
          style={setActive}
          to="main">Deals
        </NavLink>
        <NavLink
          className={styles.nav_item}
          style={setActive}
          to="main">My orders
        </NavLink>
    </nav>
  </>)
}