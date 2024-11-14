import React from "react";
import styles from "./button.module.css";

const Button = ({
  children,
  size = "medium",
  variant = "primary",
  onClick,
  className,
}) => {
  console.log(variant);
  return (
    <button
      type="submit"
      // className={`button ${variant} ${size ? size : ""}`}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
