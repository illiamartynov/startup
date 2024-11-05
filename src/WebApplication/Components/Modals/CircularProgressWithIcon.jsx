import React, { useEffect, useState } from "react";
import styles from "./CircularProgressWithIcon.module.css";
import loadingIcon from "../../../Images/Icons/starsGold.png"; // Иконка загрузки

const CircularProgressWithIcon = ({ duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 100; // Интервал обновления прогресса в миллисекундах
    const totalSteps = duration / interval;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / totalSteps) * 100);

      if (currentStep >= totalSteps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [duration]);

  return (
    <div className={styles.overlay}>
      <div className={styles.text}>Generujemy Twoje wizualizacje</div>
      <div className={styles.circularWrapper}>
        <div className={styles.circle}>
          <img src={loadingIcon} alt="Loading" className={styles.icon} />
          <div
            className={styles.progressRing}
            style={{ "--progress": `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressWithIcon;
