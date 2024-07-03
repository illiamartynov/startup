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
                href="mailto:biuro@vistager.com"
                className={styles.contactLink}
              >
                biuro@vistager.com
              </a>
            </span>
            <span>
              Tel.{" "}
              <a href="tel:+48123456789" className={styles.contactLink}>
                (+48) 123 456 789
              </a>
            </span>
          </div>
          <div>
            <span>Ul. Koszykowa 123</span>
            <span>12-345 Warszawa</span>
          </div>
        </div>
        <div className={`${styles.kontaktWrapper} ${styles.skroty}`}>
          <h1>Skróty</h1>
          <div className={styles.kontaktWrapperInnerWrapper}>
            <a>Glówna Strona</a>
            <a>Wizja</a>
            <a>Q&A</a>
            <a>O nas</a>
            <a>Galeria</a>
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

      <div className={styles.footerLogo}>
        <img src={starsLogo} alt="Stars Logo" />
      </div>
      </div>
    </div>
  );
};

export default Footer;
