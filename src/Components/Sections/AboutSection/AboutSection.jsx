import React, { useState, useEffect } from "react";
import styles from "./AboutSection.module.css";
import startLogo from "../../../Images/Icons/starsGold.png";
import PaddingWrapper from "../../Wrappers/PaddingWrapper";
const AboutSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setIsTop(true);
        setScrolled(false);
      } else {
        setIsTop(false);
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className={`${styles.aboutSectionWrapper} `}>
        <div className={styles.titleWrapper}>
          <h1
            className={`${styles.title} ${
              scrolled && !isTop && styles.scrolled
            }`}
          >
            Narzędzie AI do łatwej, szybkiej sprzedaży nieruchomości
          </h1>
        </div>
      </div>
      <div
        id="projects"
        className={`${styles.subTitleWrapper} ${isTop ? styles.hidden : ""}`}
      >
        <div className={styles.descInnerWrapper}>
          <span>
            Tylko<span> 1 na 10</span> kupujących potrafi sobie wyobrazić wnętrze po
            wykończeniu i wyposażeniu, podczas gdy <span>89% </span>agentów nieruchomości
            przyznaje, że ​<span>​home staging</span> wpływa na decyzje o zakupie.
          </span>
        </div>
          
      </div>
    </div>
  );
};
export default AboutSection;
