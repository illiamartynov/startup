import React, { useState } from "react";
import styles from "../Steps.module.css";
import addPhotoIcon from "../../../Images/Icons/addPhotoIcon.png"; // Иконка для добавления фото
import uploadFromPhoneIcon from "../../../Images/Icons/uploadFromPhone.png"; // Иконка для загрузки с телефона
import takePhotoIcon from "../../../Images/Icons/takePhoto.png"; // Иконка для съемки фото с камеры
import chooseFromUploadedIcon from "../../../Images/Icons/chooseFromUploaded.png"; // Иконка для выбора из загруженных

const UploadPhotoStep = ({ onUpload }) => {
  const [photo, setPhoto] = useState(null);

  const handleUpload = (event) => {
    const uploadedPhoto = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      setPhoto(result);
      onUpload(result); // Передаем фото и сразу переходим к следующему шагу
    };
    reader.readAsDataURL(uploadedPhoto);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <img
          src={addPhotoIcon}
          alt="Upload icon"
          className={styles.addPhotoIcon}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <label className={styles.uploadButton}>
          <img
            src={uploadFromPhoneIcon}
            alt="Upload from phone"
            className={styles.buttonIcon}
          />
          Wgraj z telefonu
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            style={{ display: "none" }}
          />
        </label>
        <button className={styles.optionButton}>
          <img
            src={takePhotoIcon}
            alt="Take a photo"
            className={styles.buttonIcon}
          />
          Zrób zdjęcie aparatem
        </button>
        <button className={styles.optionButton}>
          <img
            src={chooseFromUploadedIcon}
            alt="Choose from uploaded photos"
            className={styles.buttonIcon}
          />
          Wybierz z wgrane zdjęcia
        </button>
      </div>
    </div>
  );
};

export default UploadPhotoStep;
