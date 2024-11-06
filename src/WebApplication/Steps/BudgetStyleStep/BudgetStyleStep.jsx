import React from "react";
import Element from "../../Components/Element/Element";
import styles from "../BudgetStyleStep/BudgetStyleStep.module.css";

import contemporaryLivingRoom from "../../../Images/webApp/styles/livingRooms/Contemporary.jpg";
import minimalisticLivingRoom from "../../../Images/webApp/styles/livingRooms/Minimalistic.jpg";
import scandinavianLivingRoom from "../../../Images/webApp/styles/livingRooms/Scandinavian.jpg";

import contemporaryBedroom from "../../../Images/webApp/styles/bedrooms/Contemporary.jpg";
import minimalisticBedroom from "../../../Images/webApp/styles/bedrooms/Minimalistic.jpg";
import scandinavianBedroom from "../../../Images/webApp/styles/bedrooms/Scandinavian.jpg";

import contemporaryKitchen from "../../../Images/webApp/styles/kitchens/Contemporary.jpg";
import minimalisticKitchen from "../../../Images/webApp/styles/kitchens/Minimalistic.jpg";
import scandinavianKitchen from "../../../Images/webApp/styles/kitchens/Scandinavian.jpg";

const BudgetStyleStep = ({ onSelect, selectedRoom, uploadedPhoto }) => {
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
    <div className={styles.budgetStepWrapper}>
      {/* Отображение загруженного фото */}
      {uploadedPhoto && (
        <div className={styles.uploadedPhotoWrapper}>
          <img src={uploadedPhoto} alt="Uploaded" className={styles.uploadedPhoto} />
        </div>
      )}

      <h2 className={styles.budgetTitle}>Wybierz budżetowy styl</h2>
      <div className={styles.budgetOptionsWrapper}>
        {/* <button className={styles.arrowButton}>{"<"}</button> */}
        <div className={styles.elementsWrapper}>
          {options.map((option, index) => (
            <Element
              key={index}
              image={option.image}
              text={`${option.name} ${option.priceRange}`}
              onClick={() => onSelect(option.name)}
            />
          ))}
        </div>
        {/* <button className={styles.arrowButton}>{">"}</button> */}
      </div>
    </div>
  );
};

export default BudgetStyleStep;