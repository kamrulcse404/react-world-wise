import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>Lists of cities</p>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
            &copy; Copyright {new Date().getFullYear()} by WorldWise Kamrul Hasan Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
