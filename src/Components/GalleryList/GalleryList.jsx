import React from "react";
import styles from "./GalleryList.module.css";

const GalleryList = ({ Text }) => {
  if (!Text) return null;

  const pointsArray = Text.points.split(";");

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>{Text.title}</h1>
        <ol>
          {pointsArray.map((point, index) => (
            <li key={index}>
              <b>{index + 1}.</b> {point.trim()}
            </li>
          ))}
        </ol>
      </div>
      <div>
        <span>I to wszystko! </span>
        <p>
          Wykorzystaj magię wizualizacji i sprzedaj nieruchomość na pierwszym
          spotkaniu.
        </p>
        <button className={styles.watchVideo}>ZOBACZ VIDEO</button>
        <span>lub przesuń suwak poniżej:</span>
      </div>
    </div>
  );
};

export default GalleryList;
