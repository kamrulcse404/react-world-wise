import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick, type }) => {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
