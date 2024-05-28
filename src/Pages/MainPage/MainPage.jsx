import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import styles from "./MainPage.module.css";
import AboutSection from "../../Components/Sections/AboutSection/AboutSection";
import Gallery from "../../Components/Sections/GallerySection/Gallery";
import Footer from "../../Components/Footer/Footer";
import RegistrationAdd from "../../Components/RegistrationAdd/RegistrationAdd";
import CookiesWindow from "../../Cookies/CookiesWindow";

const MainPage = () => {
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const galleryElement = document.getElementById("gallery");
      const galleryPosition = galleryElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const galleryHeight = galleryElement.offsetHeight;
      const visibleHeight = windowHeight - galleryPosition;
      const visiblePercentage = (visibleHeight / galleryHeight) * 100;
      const opacity = 1 - visiblePercentage / 90;
      setHeaderOpacity(opacity < 0 ? -opacity : opacity);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    const body = document.body;
    if (!isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.mainPageWrapper}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} opacity={headerOpacity} />
      <AboutSection />
      <RegistrationAdd toggleMenu={toggleMenu} />
      <Gallery id="gallery"/>
      <Footer />
      <CookiesWindow/>
    </div>
  );
};

export default MainPage;
