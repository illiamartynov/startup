import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./RenderingZone.module.css";
import ProgressLine from "../Components/ProgressLine/ProgressLine";
import RoomStep from "../Steps/RoomStep/RoomStep";
import BudgetStyleStep from "../Steps/BudgetStyleStep/BudgetStyleStep";
import UploadPhotoStep from "../Steps/UploadPhotoStep/UploadPhotoStep";
import FinalProjectStep from "../Steps/FinalProjectStep/FinalProjectStep";

const RenderingZone = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedBudgetStyle, setSelectedBudgetStyle] = useState(null);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [finalImage, setFinalImage] = useState(null);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setCurrentStep(2);
  };

  const handleBudgetStyleSelect = (budgetStyle) => {
    setSelectedBudgetStyle(budgetStyle);
    setCurrentStep(3);
  };

  const handlePhotoUpload = (photo) => {
    setUploadedPhoto(photo);
    setCurrentStep(4);
  };

  const handleFinalStep = async () => {
    const url = "localhost:5000/get_insane_image_1337";
    const data = {
      room_choice: selectedRoom,
      style_budget_choice: selectedBudgetStyle,
      input_image: uploadedPhoto,
    };
  
    try {
      const response = await axios.post(url, data);
      const outputImage = response.data.output_image;
      setFinalImage(outputImage);
  
      // Выводим request в консоль
      console.log("Request:", data);
    } catch (error) {
      console.error("Error during the final step:", error);
    }
  };
  

  return (
    <div className={styles.outerWrapper}>
      {currentStep === 1 && <RoomStep onSelect={handleRoomSelect} />}
      {currentStep === 2 && (
        <BudgetStyleStep onSelect={handleBudgetStyleSelect} />
      )}
      {currentStep === 3 && <UploadPhotoStep onUpload={handlePhotoUpload} />}
      {currentStep === 4 && (
        <FinalProjectStep
          room={selectedRoom}
          budgetStyle={selectedBudgetStyle}
          photo={uploadedPhoto}
          onFinish={handleFinalStep}
          finalImage={finalImage}
        />
      )}
    </div>
  );
};

export default RenderingZone;
