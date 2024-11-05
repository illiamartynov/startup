import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import styles from "./RenderingZone.module.css";
import PhotoUploadStep from "../Steps/UploadPhotoStep/UploadPhotoStep";
import RoomStep from "../Steps/RoomStep/RoomStep";
import BudgetStyleStep from "../Steps/BudgetStyleStep/BudgetStyleStep";
import FinalProjectStep from "../Steps/FinalProjectStep/FinalProjectStep";
import ProgressBar from "../Components/ProgressBar";
import ConfirmationModal from "../Components/Modals/ConfirmationModal";
import CircularProgressWithIcon from "../Components/Modals/CircularProgressWithIcon";

const RenderingZone = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedBudgetStyle, setSelectedBudgetStyle] = useState(null);
  const [finalImage, setFinalImage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  const handlePhotoUpload = (photo) => {
    setUploadedPhoto(photo);
    setCurrentStep(2); // Переход к RoomStep после загрузки фото
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setCurrentStep(3); // Переход к BudgetStyleStep после выбора комнаты
  };

  const handleBudgetStyleSelect = (budgetStyle) => {
    setSelectedBudgetStyle(budgetStyle);
    setShowConfirmationModal(true); // Открыть модальное окно для подтверждения
  };

  // const fakePost = () => new Promise(resolve => setTimeout(() => resolve({ data: { output_image: "FAKE_IMAGE_DATA" } }), 2000));

  // const handleConfirm = async () => {
  //   setShowConfirmationModal(false);
  //   setShowLoadingModal(true);
  //   setError(null);

  //   try {
  //     const response = await fakePost(); // Используем fakePost вместо axios.post
  //     const outputImage = response.data.output_image;
  //     setFinalImage(`data:image/png;base64,${outputImage}`);
  //     setCurrentStep(4);
  //   } catch (error) {
  //     setError("Ошибка при отправке данных на сервер");
  //     console.error("Error during the final step:", error);
  //   } finally {
  //     setShowLoadingModal(false);
  //     setIsLoading(false);
  //   }
  // };
  const handleConfirm = async () => {
    setShowConfirmationModal(false); // Закрыть окно подтверждения
    // setShowLoadingModal(true); // Показать окно загрузки
    setError(null);
  
    // const url = "/ai/get_insane_image_1337";
    // const cleanedPhoto = uploadedPhoto.replace(/^data:image\/\w+;base64,/, "");
    // const bearerToken = Cookies.get("bearer_token");
    
    // if (!bearerToken) {
    //   console.error("Bearer token отсутствует. Убедитесь, что он установлен.");
    //   setError("Ошибка авторизации: токен отсутствует");
    //   setShowLoadingModal(false);
    //   return;
    // }
    
    // const data = {
    //   room_choice: selectedRoom,
    //   style_budget_choice: selectedBudgetStyle,
    //   input_image: cleanedPhoto,
    // };
  
    // console.log("Bearer token:", bearerToken); // Проверка значения токена
    // console.log("Запрос на URL:", url);
    // console.log("Заголовки запроса:", {
    //   Authorization: `Bearer ${bearerToken}`,
    // });
    // console.log("Тело запроса:", data);
  
    // try {
    //   console.log("Отправка запроса...");
    //   const response = await axios.post(url, data, { // добавил await здесь
    //     headers: {
    //       Authorization: `Bearer ${bearerToken}`,
    //     },
    //   });
    //   console.log("Ответ получен:", response);
    //   const outputImage = response.data.output_image;
    //   setFinalImage(`data:image/png;base64,${outputImage}`);
      setCurrentStep(4); // Переход на финальный шаг
    // } catch (error) {
    //   setError("Ошибка при отправке данных на сервер");
    //   console.error("Error during the final step:", error);
    // } finally {
    //   setShowLoadingModal(false); // Закрыть окно загрузки
    //   setIsLoading(false);
    // }
  };
  
  const handleCancel = () => {
    setShowConfirmationModal(false); // Закрыть окно подтверждения
  };
  const handleFinalStep = async () => {
    setIsLoading(true);
    setError(null);

    const url = "/ai/get_insane_image_1337";
    const cleanedPhoto = uploadedPhoto.replace(/^data:image\/\w+;base64,/, "");
    const bearerToken = Cookies.get("bearer_token");

    const data = {
      room_choice: selectedRoom,
      style_budget_choice: selectedBudgetStyle,
      input_image: cleanedPhoto,
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: $`{bearerToken}`,
        },
      });

      const outputImage = response.data.output_image;
      const prefixedImage = `data:image/png;base64,${outputImage}`;
      setFinalImage(prefixedImage);
    } catch (error) {
      setError("Ошибка при отправке данных на сервер");
      console.error("Error during the final step:", error);

      // Выводим заголовки и тело запроса в консоль для отладки
      // console.log("Request headers:", {
      //   Authorization: ${bearerToken},
      // });
      // console.log("Request body:", data);
      // console.log("Link body:", url);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.contentWrapper}>
        {/* Рендеринг шагов в зависимости от currentStep */}
        {currentStep === 1 && <PhotoUploadStep onUpload={handlePhotoUpload} />}
        {currentStep === 2 && (
          <RoomStep onSelect={handleRoomSelect} uploadedPhoto={uploadedPhoto} />
        )}
        {currentStep === 3 && (
          <BudgetStyleStep
            onSelect={handleBudgetStyleSelect}
            selectedRoom={selectedRoom}
            uploadedPhoto={uploadedPhoto}
          />
        )}
        {currentStep === 4 && (
          <FinalProjectStep
            room={selectedRoom}
            budgetStyle={selectedBudgetStyle}
            photo={uploadedPhoto}
            finalImage={finalImage}
            onFinish={handleFinalStep}
            error={error}
          />
        )}
      </div>

      {/* Прогресс-бар снизу */}
      <ProgressBar currentStep={currentStep} onStepClick={setCurrentStep} />

      {/* Модальное окно подтверждения */}
      {showConfirmationModal && (
        <ConfirmationModal
          isOpen={showConfirmationModal}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          title="ZUŻYCIE KREDYTÓW"
          message="Do stworzenia wizualizacji zużyjesz: 1 kredyt z Twojego pakietu"
        />
      )}

      {/* Анимация загрузки с прогрессом */}
      {showLoadingModal && <CircularProgressWithIcon duration={5000} />}
    </div>
  );
};

export default RenderingZone;
