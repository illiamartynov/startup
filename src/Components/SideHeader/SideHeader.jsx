import React, { useState} from "react";
import styles from "./SideHeader.module.css";
import inst from "../../Images/Icons/instagram.png";
import twitter from "../../Images/Icons/twitter.png";
import youtube from "../../Images/Icons/youtube.png";
import btnOpen from "../../Images/Icons/btnClose.png";

const SideHeader = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  const images = [
    { img: inst, link: "https://www.instagram.com/vistager_design/" },
    { img: twitter, link: "https://twitter.com/VISTAGER" },
    {
      img: youtube,
      link: "https://www.youtube.com/channel/UC15DDQ84N6G62gXHlMgG46g",
    },
  ];

  if (!scrolled) {
    return null;
  }

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.showMenu : ""}`}>
      <div className={styles.innerWrapper}>
        {images.map((image, index) => (
          <a
            key={index}
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`${
                isOpen ? styles.imgSocialOpen : styles.imgSocialClose
              }`}
              src={image.img}
              alt={`icon-${index}`}
            />
          </a>
        ))}
        <button onClick={toggleMenu} className={styles.closeOpenBtn}>
          <img
            className={`${styles.menuImg} ${isOpen ? styles.rotate : ""} ${
              isOpen ? styles.openMenu : styles.closeMenu
            }`}
            src={isOpen ? btnOpen : btnOpen}
            alt="Menu"
          />
        </button>
      </div>
    </div>
  );
};

export default SideHeader;
