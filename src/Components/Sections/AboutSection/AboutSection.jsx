import React, { useState, useEffect } from "react";
import styles from "./AboutSection.module.css";
import startLogo from "../../../Images/Icons/starsGold.png";
import PaddingWrapper from "../../Wrappers/PaddingWrapper";
import GalleryList from "../../GalleryList/GalleryList";
const AboutSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const Text = {
    title: "Jak to działa?",
    points:
      "Zrób zdjęcie swojego wnętrza; Wybierz rodzaj pomieszczenia; Zadeklaruj budżet na wykończenie i wyposażenie",
  };
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
          <h1>Sprzedajesz dom lub mieszkanie?</h1>
          <span>
            Wykorzystaj moc sztucznej inteligencji, a zainteresowanie Twoją
            ofertą wzrośnie dwukrotnie.
          </span>
        </div>
        <PaddingWrapper className={styles.leftSideDesc} pad={0} side={"left"}>
        <GalleryList Text={Text} />
      </PaddingWrapper>
      </div>
    </div>
  );
};
export default AboutSection;
