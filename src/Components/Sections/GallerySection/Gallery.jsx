import React from "react";
import styles from "./Gallery.module.css";
import Slider from "../../Slider/Slider";
const Gallery = () => {
  

  return (
    <div>
      
      <Slider />
      <div id="aboutus" className={styles.galleryWrapper}>
        
        <span className={styles.desc}>
          Nasz zautomatyzowany system stworzy dla Ciebie profesjonalny projekt w
          kilka chwil. Możesz go użyć do publikacji ogłoszenia lub pokazać przy
          oględzinach. To sprawdzony sposób na uniknięcie straty czasu z
          niezdecydowanymi kupującymi.
        </span>
      </div>
    </div>
  );
};

export default Gallery;
