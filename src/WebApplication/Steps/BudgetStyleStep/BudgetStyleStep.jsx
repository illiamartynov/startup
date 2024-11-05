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

  if (selectedRoom === "SYPIALNIA") {
    options = [
      { name: "Ekonomiczny", image: contemporaryLivingRoom, priceRange: "0 zł - 2000 zł/m²" },
      { name: "Standard", image: minimalisticLivingRoom, priceRange: "2000 zł - 4000 zł/m²" },
      { name: "Gold", image: scandinavianLivingRoom, priceRange: "4000 zł - 6000 zł/m²" },
      { name: "Premium", image: scandinavianLivingRoom, priceRange: "od 6000 zł/m²" },
    ];
  } else if (selectedRoom === "SALON") {
    options = [
      { name: "Ekonomiczny", image: contemporaryBedroom, priceRange: "0 zł - 2000 zł/m²" },
      { name: "Standard", image: minimalisticBedroom, priceRange: "2000 zł - 4000 zł/m²" },
      { name: "Gold", image: scandinavianBedroom, priceRange: "4000 zł - 6000 zł/m²" },
      { name: "Premium", image: scandinavianBedroom, priceRange: "od 6000 zł/m²" },
    ];
  } else if (selectedRoom === "KUCHNIA") {
    options = [
      { name: "Ekonomiczny", image: contemporaryKitchen, priceRange: "0 zł - 2000 zł/m²" },
      { name: "Standard", image: minimalisticKitchen, priceRange: "2000 zł - 4000 zł/m²" },
      { name: "Gold", image: scandinavianKitchen, priceRange: "4000 zł - 6000 zł/m²" },
      { name: "Premium", image: scandinavianKitchen, priceRange: "od 6000 zł/m²" },
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