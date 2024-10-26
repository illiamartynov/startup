import React from "react";
import styles from "./Footer.module.css";
import starsLogo from "../../Images/Icons/vistager_logo.png";
import Newsletter from "../Newsletter/Newsletter";
import inst from "../../Images/Icons/instaYel.png";
import twitter from "../../Images/Icons/twitterYel.png";
import youtube from "../../Images/Icons/youtubeYel.png";
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
        <div className={styles.kontaktWrapper}>
          <h1>Kontakt</h1>
          <div>
            <span>
              E-mail:{" "}
              <a
                href="mailto:dawid.tambor@vistager.com"
                className={styles.contactLink}
              >
                dawid.tambor@vistager.com
              </a>
            </span>
            <span>
              Tel.{" "}
              <a href="tel:+48505788569" className={styles.contactLink}>
                (+48) 505 788 569
              </a>
            </span>
            
          </div>
          <div className={styles.orgInf}>
          <span>KRS: 0001112924</span>
          <span>NIP: 7011211164</span>
          <span>REGON: 528984312</span>

          </div>
          <div>
            <span>Hoża 86 / 410</span>
            <span>00-682 Warszawa, Polska</span>

          </div>

        </div>
        
        <div className={`${styles.kontaktWrapper} ${styles.skroty}`}>
          <h1>Skróty</h1>
          <div className={styles.kontaktWrapperInnerWrapper}>
            <a href="./">Strona Główna</a>

            <a href="./wizja">Wizja</a>
            <a href="./aboutUs">Zespół</a>
            <a>Galeria</a>
            <a>Cennik</a>

            <a href="./q&a">Q&A</a>
          </div>
        </div>
      </div>
      <div className={styles.footerImagesWrapper}>
        <div className={styles.socialNets}>
          {images.map((item, index) => (
            <a key={index} href={item.link}>
              <img src={item.img} alt={`Social icon ${index}`} />
            </a>
          ))}
        </div>
        <span className={styles.orgName}>INNOVATIVE DESIGN ENGINEERING ASSOCIATION SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</span>

        <div className={styles.footerLogo}>
          <img src={starsLogo} alt="Stars Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
