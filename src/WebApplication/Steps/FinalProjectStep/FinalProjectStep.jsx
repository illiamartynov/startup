import React from "react";
import styles from "../Steps.module.css";

const FinalProjectStep = ({ room, budgetStyle, photo, onFinish, finalImage, isLoading, error }) => {
  const handleDownload = () => {
    if (finalImage) {
      const link = document.createElement("a");
      link.href = finalImage;
      link.download = "final_image.jpg";
      link.click();
    }
  };
  return (
    <div className={styles.wrapper}>
      <h2>Your project:</h2>
      <p>Room: {room}</p>
      <p>Budget and style: {budgetStyle}</p>
      <img className={styles.finalPhoto} src={photo} alt="Uploaded" />
      {error && <p className={styles.error}>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button className={styles.savebtn} onClick={onFinish}>WYPRÓBUJ</button>
      )}
      {finalImage && (
        <>
          <img className={styles.finalPhoto} src={finalImage} alt="Final" />
          <button className={styles.downloadbtn} onClick={handleDownload}>Download</button>
        </>
      )}
    </div>
  );
};

export default FinalProjectStep;
