import React, { useState } from "react";
import styles from "../Steps.module.css"; 
import plus from "../../../Images/Icons/plus.png";

const UploadPhotoStep = ({ onUpload }) => {
  const [photo, setPhoto] = useState(null);
  const [isPhotoSelected, setIsPhotoSelected] = useState(false);

  const handleUpload = (event) => {
    const uploadedPhoto = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result); 
      setIsPhotoSelected(true); 
    };
    reader.readAsDataURL(uploadedPhoto); 
  };

  const handleSubmit = () => {
    onUpload(photo);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Upload photo:</h2>
      <div className={styles.inputWrapper}>
        <div
          style={{
            border: isPhotoSelected ? "transparent" : "calc((1 / 430) * 100vmin) solid black", 
          }}
          className={styles.inputInnerWrapper}
        >
          <div className={styles.imagePreview}>
            <img src={isPhotoSelected ? photo : plus} alt="Uploaded" />
          </div>
          <input
            className={styles.imageInput}
            type="file"
            accept="image/*"
            onChange={handleUpload}
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={!isPhotoSelected}
          style={{
            backgroundColor: isPhotoSelected ? "#dfc476" : "#ccc",
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadPhotoStep;