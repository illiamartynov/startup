import React from "react";
import Element from "../../Components/Element/Element";
import styles from "../Steps.module.css";

// Импортируем изображения стилей для каждой комнаты
import contemporaryLivingRoom from "../../../Images/webApp/styles/livingRooms/Contemporary.jpg";
import minimalisticLivingRoom from "../../../Images/webApp/styles/livingRooms/Minimalistic.jpg";
import scandinavianLivingRoom from "../../../Images/webApp/styles/livingRooms/Scandinavian.jpg";

import contemporaryBedroom from "../../../Images/webApp/styles/bedrooms/Contemporary.jpg";
import minimalisticBedroom from "../../../Images/webApp/styles/bedrooms/Minimalistic.jpg";
import scandinavianBedroom from "../../../Images/webApp/styles/bedrooms/Scandinavian.jpg";

import contemporaryKitchen from "../../../Images/webApp/styles/kitchens/Contemporary.jpg";
import minimalisticKitchen from "../../../Images/webApp/styles/kitchens/Minimalistic.jpg";
import scandinavianKitchen from "../../../Images/webApp/styles/kitchens/Scandinavian.jpg";

const BudgetStyleStep = ({ onSelect, selectedRoom }) => {
  let options = [];

  if (selectedRoom === "living room") {
    options = [
      { name: "Contemporary, High-End", image: contemporaryLivingRoom },
      { name: "Minimalistic, Average", image: minimalisticLivingRoom },
      { name: "Scandinavian, Moderate", image: scandinavianLivingRoom },
    ];
  } else if (selectedRoom === "bedroom") {
    options = [
      { name: "Contemporary, High-End", image: contemporaryBedroom },
      { name: "Minimalistic, Average", image: minimalisticBedroom },
      { name: "Scandinavian, Moderate", image: scandinavianBedroom },
    ];
  } else if (selectedRoom === "kitchen") {
    options = [
      { name: "Contemporary, High-End", image: contemporaryKitchen },
      { name: "Minimalistic, Average", image: minimalisticKitchen },
      { name: "Scandinavian, Moderate", image: scandinavianKitchen },
    ];
  }

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
