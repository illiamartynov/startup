import React from "react";
import styles from "./ProgressBar.module.css";
import inactiveIcon from "../../Images/Icons/inactive.png"; // Иконка неактивного шага
import activeIcon from "../../Images/Icons/active.png"; // Иконка активного шага

const ProgressBar = ({ currentStep, onStepClick }) => {
    const steps = [1, 2, 3, 4]; // Список шагов для отображения на прогресс-баре
  
    return (
      <div className={styles.progressBarWrapper}>
        <div className={styles.progressBar}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Круг для шага */}
              <div
                className={`${styles.circle} ${step <= currentStep ? styles.active : ""}`}
                onClick={() => step <= currentStep && onStepClick(step)} // Кликаем только на пройденные шаги
              >
                <img
                  src={step <= currentStep ? activeIcon : inactiveIcon} // Меняем иконку в зависимости от состояния
                  alt={`Step ${step}`}
                  className={styles.icon}
                />
              </div>
              {/* Линия между шагами, отображаем только после первого шага */}
              {index < steps.length - 1 && (
                <div
                  className={`${styles.line} ${step < currentStep ? styles.filledLine : ""}`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProgressBar;