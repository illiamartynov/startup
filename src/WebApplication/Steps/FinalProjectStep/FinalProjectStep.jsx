import React from "react";
import styles from "../Steps.module.css"

const FinalProjectStep = ({ room, budgetStyle, photo, onFinish }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Your project:</h2>
      <p>Room: {room}</p>
      <p>Budget and style: {budgetStyle}</p>
      <img src={photo} alt="Uploaded" />
      <button onClick={onFinish}>Save/Send/Download</button>
    </div>
  );
};

export default FinalProjectStep;
