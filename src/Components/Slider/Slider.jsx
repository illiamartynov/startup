import React, { useState } from "react";
import styles from "./Slider.module.css";
import btnLeft from "../../Images/Icons/btnLeft.png";
import btnRight from "../../Images/Icons/btnRight.png";
import circleImg from "../../Images/Icons/photo_tag_ball.png";
import starImg from "../../Images/Icons/slider_current_photo_stars.png";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import before1 from "../../Images/galleryImages/before1.jpg";
import before2 from "../../Images/galleryImages/before2.jpg";
import before3 from "../../Images/galleryImages/before3.jpg";
import before4 from "../../Images/galleryImages/before4.jpg";
import before5 from "../../Images/galleryImages/before5.jpg";
import after1 from "../../Images/galleryImages/after1.jpg";
import after2 from "../../Images/galleryImages/after2.jpg";
import after3 from "../../Images/galleryImages/after3.jpg";
import after4 from "../../Images/galleryImages/after4.jpg";
import after5 from "../../Images/galleryImages/after5.jpg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState("none");

  const images = [
    { before: before1, after: after1 },
    { before: before2, after: after2 },
    { before: before3, after: after3 },
    { before: before4, after: after4 },
    { before: before5, after: after5 },
  ];
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setTransition("transform 0.5s ease");
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setTransition("transform 0.5s ease");
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleCircleClick = (index) => {
    const distance = Math.abs(index - circlesBefore);
    const newIndex =
      currentIndex + (index > circlesBefore ? distance : -distance);
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentIndex(newIndex);
    }
  };

  const isPreviousDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === images.length - 1;

  const circlesBefore = currentIndex == 3 ? 3 : currentIndex == 4 ? 4 : currentIndex > 1 ? 2 : currentIndex;
  const circlesAfter = currentIndex == 0 ? 4 : currentIndex == 1 ? 3 : 
    images.length - currentIndex - 1 > 2 ? 2 : images.length - currentIndex - 1;

  return (
    <div id="gallery1" className={styles.wrapper}>
      <div className={`${styles.sliderWrapper} ${styles.transition}`}>
        <div className={styles.buttonWrapperPrev}>
          <button
            className={styles.previousBtn}
            onClick={handlePrevious}
            disabled={isPreviousDisabled}
          >
            <img src={btnLeft} alt="btnPrevious" />
          </button>
        </div>

        <ImgComparisonSlider className={styles.qwe}>
          <img slot="first" src={images[currentIndex]?.before} />
          <img slot="second" src={images[currentIndex]?.after} />
        </ImgComparisonSlider>
        <div className={styles.galleryId} id="gallery">
          {" "}
        </div>
        <div className={styles.buttonWrapperNext}>
          <button
            className={styles.nextBtn}
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            <img src={btnRight} alt="btnNext" />
          </button>
        </div>
        <div className={styles.statusBar}>
          {images.length > 0 &&
            [...Array(circlesBefore)].map((_, index) => (
              <img
                key={index}
                src={circleImg}
                alt="circle"
                onClick={() => handleCircleClick(index)}
              />
            ))}
          <img src={starImg} alt="star" />
          {images.length > 0 &&
            [...Array(circlesAfter)].map((_, index) => (
              <img
                key={index}
                src={circleImg}
                alt="circle"
                onClick={() => handleCircleClick(circlesBefore + index + 1)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
