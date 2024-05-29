import React from "react";
import styles from "../Steps.module.css";

const FinalProjectStep = ({ room, budgetStyle, photo, onFinish, finalImage, isLoading, error }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Your project:</h2>
      <p>Room: {room}</p>
      <p>Budget and style: {budgetStyle}</p>
      <img src={photo} alt="Uploaded" />
      {error && <p className={styles.error}>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={onFinish}>Save/Send/Download</button>
      )}
      {finalImage && <img src={finalImage} alt="Final" />}
    </div>
  );
};

export default FinalProjectStep;
