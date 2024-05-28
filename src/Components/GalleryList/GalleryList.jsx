import React from "react";
import styles from "./GalleryList.module.css";

const GalleryList = ({ Text }) => {
  if (!Text) return null;

  const pointsArray = Text.points.split(";");

  return (
    <div className={styles.wrapper}>
      <h1>{Text.title}</h1>
      <ol>
        {pointsArray.map((point, index) => (
          <li key={index}>
            <b>{index + 1}.</b> {point.trim()}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GalleryList;
