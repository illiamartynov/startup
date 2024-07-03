import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import styles from "./MainPage.module.css";
import AboutSection from "../../Components/Sections/AboutSection/AboutSection";
import Gallery from "../../Components/Sections/GallerySection/Gallery";
import Footer from "../../Components/Footer/Footer";
import RegistrationAdd from "../../Components/RegistrationAdd/RegistrationAdd";
import CookiesWindow from "../../Cookies/CookiesWindow";
import Layout from "../../Layout/Layout";

const MainPage = () => {
  

  return (
    <Layout>
      <div className={styles.mainPageWrapper}>
        <AboutSection />
        <RegistrationAdd />
        <Gallery id="gallery" />
      </div>
    </Layout>
  );
};

export default MainPage;
