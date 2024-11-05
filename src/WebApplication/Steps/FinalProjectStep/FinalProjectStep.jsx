import React from "react";
import styles from "../FinalProjectStep/FinalProjectStep.module.css";

const FinalProjectStep = ({ room, budgetStyle, photo, onFinish, finalImage, isLoading, error }) => {
  const handleDownload = () => {
    if (finalImage) {
      const link = document.createElement("a");
      link.href = finalImage;
      link.download = "final_image.jpg";
      link.click();
    }
  };

  return (
    <div className={styles.finalProjectWrapper}>
      {/* Отображение загруженного фото пользователя */}
      

      {/* Блок с кнопками */}
      <div className={styles.buttonContainer}>
      {photo && (
        <div className={styles.uploadedPhotoWrapper}>
          <img src={photo} alt="Uploaded" className={styles.uploadedPhoto} />
        </div>
      )}
      {finalImage && (
        <div className={styles.finalImageWrapper}>
          <img src={finalImage} alt="Final" className={styles.finalImage} />
        </div>
      )}
        {/* <button className={styles.newVisualizationButton}>
          Nowa wizualizacja
        </button>
        <button className={styles.uploadNewPhotoButton}>
          Wgraj nowe zdjęcie
        </button> */}
        <button className={styles.saveButton} onClick={handleDownload}>
          Zapisz
        </button>
        <button className={styles.shortOfferButton} onClick={onFinish}>
          Let's go
        </button>
      </div>

      {/* Показ финального изображения, если оно доступно */}
      

      {/* Показ ошибки и загрузки */}
      {error && <p className={styles.error}>{error}</p>}
      {isLoading && <p className={styles.loading}>Loading...</p>}
    </div>
  );
};

export default FinalProjectStep;