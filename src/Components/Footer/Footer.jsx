import React from "react";
import styles from "./Footer.module.css";
import starsLogo from "../../Images/Icons/vistager_logo.png";
import Newsletter from "../Newsletter/Newsletter";
import inst from "../../Images/Icons/instagram.png";
import twitter from "../../Images/Icons/twitter.png";
import youtube from "../../Images/Icons/youtube.png";
import btnOpen from "../../Images/Icons/btnClose.png";
const Footer = () => {
  const images = [
    { img: inst, link: "https://www.instagram.com/vistager_design/" },
    { img: twitter, link: "https://twitter.com/VISTAGER" },
    {
      img: youtube,
      link: "https://www.youtube.com/channel/UC15DDQ84N6G62gXHlMgG46g",
    },
  ];
  return (
    <div id="Kontakts" className={styles.wrapper}>
      <div className={styles.innerWrapperKontacts}>
        <Newsletter />
        <div className={`${styles.kontaktWrapper} ${styles.skroty}`}>
          <h1>Skróty</h1>
          <div className={styles.kontaktWrapperInnerWrapper}>
            <a>O nas</a>
            <a>Oferta dla inwestorów</a>
            <a>Galeria</a>
            <a>Q&A</a>
            <a>Regulaminy</a>
          </div>
        </div>
        <div className={styles.kontaktWrapper}>
          <h1>Kontakt</h1>
          <div>
            <span>e-mail: biuro@vistager.com</span>
            <span>tel. (+48) 123 456 789</span>
          </div>
          <div>
            <span>ul. Koszykowa 123</span>
            <span>12-345 Warszawa</span>
          </div>
        </div>
      </div>
      <div className={styles.footerLogo}>
        <img src={starsLogo} />
      </div>
    </div>
  );
};

export default Footer;
