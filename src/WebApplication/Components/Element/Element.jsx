import React from "react";
import styles from "./Element.module.css";

const Element = ({ image, text, onClick }) => {
  return (
    <div className={styles.element} onClick={onClick}>
      <img src={image} alt={text} className={styles.image} />
      <div className={styles.overlay}></div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Element;