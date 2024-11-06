import React from "react";
import CircularProgressWithIcon from "../../Components/Modals/CircularProgressWithIcon";
import styles from "../FinalProjectStep/FinalProjectStep.module.css";

const FinalProjectStep = ({ room, budgetStyle, photo, onFinish, finalImage, error }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Если finalImage загружено, то останавливаем показ лоадера
    if (finalImage) {
      setIsLoading(false);
    }
  }, [finalImage]);

  const handleDownload = () => {
    if (finalImage) {
      const link = document.createElement("a");
      link.href = finalImage;
      link.download = "final_image.jpg";
      link.click();
    }
  };

  const onFinishClick = () => {
    setIsLoading(true); // Запускаем лоадер
    onFinish(); // Вызываем переданный onFinish для начала загрузки изображения
  };

  return (
    <div className={styles.finalProjectWrapper}>
      {/* Отображение CircularProgressWithIcon, если идет загрузка */}
      {isLoading && !finalImage && <CircularProgressWithIcon duration={3000} />}

      {/* Отображение загруженного фото пользователя */}
      {photo && (
        <div className={styles.uploadedPhotoWrapper}>
          <img src={photo} alt="Uploaded" className={styles.uploadedPhoto} />
        </div>
      )}

      {/* Показ финального изображения, если оно доступно */}
      {finalImage && (
        <div className={styles.finalImageWrapper}>
          <img src={finalImage} alt="Final" className={styles.uploadedPhoto} />
        </div>
      )}

      {/* Блок с кнопками */}
      <div className={styles.buttonContainer}>
        <button className={styles.saveButton} onClick={handleDownload}>
          Zapisz
        </button>
        <button className={styles.shortOfferButton} onClick={onFinishClick}>
          Let's go
        </button>
      </div>

      {/* Показ ошибки */}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default FinalProjectStep;