import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import styles from "./MainPage.module.css";
import AboutSection from "../../Components/Sections/AboutSection/AboutSection";
import Gallery from "../../Components/Sections/GallerySection/Gallery";
import Footer from "../../Components/Footer/Footer";
import RegistrationAdd from "../../Components/RegistrationAdd/RegistrationAdd";
import CookiesWindow from "../../Cookies/CookiesWindow";
import Layout from "../../Layout/Layout";
import GalleryList from "../../Components/GalleryList/GalleryList";
import FooterQuestions from "../../Components/FooterQuestions/FooterQuestions";
const MainPage = () => {
  
  const Text = {
    title: "Jak to działa?",
    points:
      "Wykonaj zdjęcie swojego wnętrza; Wskaż rodzaj pomieszczenia; Wybierz budżet",
  };
  return (
    <Layout>
      <div className={styles.mainPageWrapper}>
        <AboutSection />
        <GalleryList Text={Text}/>
        <Gallery id="gallery" />
        <RegistrationAdd />
        <FooterQuestions/>
      </div>
    </Layout>
  );
};

export default MainPage;
