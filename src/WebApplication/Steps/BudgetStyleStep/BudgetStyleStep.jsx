import React from "react";
import Element from "../../Components/Element/Element";
import budgetImage from "../../../Images/galleryImages/after8.jpg";
import mediumImage from "../../../Images/galleryImages/after8.jpg";
import luxuryImage from "../../../Images/galleryImages/after8.jpg";
import ultraLuxuryImage from "../../../Images/galleryImages/after8.jpg";
import styles from "../Steps.module.css";

const BudgetStyleStep = ({ onSelect }) => {
  const options = [
    { name: "Low cost", image: budgetImage },
    { name: "Medium", image: mediumImage },
    { name: "Expensive", image: luxuryImage },
    { name: "Ultra Expensive", image: ultraLuxuryImage },
  ];

  return (
    <div className={styles.wrapper}>
      <h2>Choose your budget and style:</h2>
      <div className={styles.elementsWrapper}>
        {options.map((option, index) => (
          <Element
            key={index}
            image={option.image}
            text={option.name}
            onClick={() => onSelect(option.name)}
          >
            {option.name}
          </Element>
        ))}
      </div>
    </div>
  );
};

export default BudgetStyleStep;
