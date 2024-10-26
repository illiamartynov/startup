import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import menuWhite from "../../Images/Icons/whiteMenu.png";
import logoWhite from "../../Images/Icons/whiteLogo.png";
import menuBlack from "../../Images/Icons/blackMenu.png";
import closeMenu from "../../Images/Icons/menuClose.png";
import logoBlack from "../../Images/Icons/vistager_logo.png";
import LeftSideHeader from "../LeftSideHeader/LeftSideHeader";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import SideHeader from "../SideHeader/SideHeader";
import RightSideHeader from "../RightSideHeader/RightSideHeader";

const Header = ({ opacity, isMenuOpen, setIsMenuOpen, page }) => {
  const [scrolled, setScrolled] = useState(page);
  const [isTop, setIsTop] = useState(!page);
  const [currentOpacity, setCurrentOpacity] = useState(1);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0 && !page) {
        setIsTop(true);
        setScrolled(false);
      } else {
        setIsTop(false);
        setScrolled(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  useEffect(() => {
    if (isMenuOpen) {
      setCurrentOpacity(1);
    } else {
      setCurrentOpacity(opacity);
    }
  }, [isMenuOpen, opacity]);

  useEffect(() => {
    const handleResize = () => {
      if (screenWidth > 768) {
        setCurrentOpacity(1);
      } else {
        setCurrentOpacity(opacity);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [opacity]);

  const display = currentOpacity <= 0.4 ? "none" : "";
  console.log(currentOpacity)
  
  const headerStyle = {
    opacity: screenWidth > 768 ? currentOpacity : 1,
    display: screenWidth > 768 ? display : "",
  };

  return (
    <div
      className={`${styles.headerWrapper} ${
        scrolled && !isTop && styles.scrolled
      }`}
      style={headerStyle}
    >
      <div className={styles.qwe}>
        <div
          className={`${styles.innerWrapper} ${
            scrolled && !isTop && styles.scrolledInner
          }`}
        >
          <div className={`${styles.header} `}>
            <LeftSideHeader
              closeMenu={closeMenu}
              openMenu={scrolled ? menuBlack : menuWhite}
              logo={scrolled ? logoBlack : logoWhite}
            />
          </div>
          <HeaderMenu scrolled={scrolled} />
        </div>

        <RightSideHeader
          isTop={isTop}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>

      <SideHeader scrolled={scrolled} />
    </div>
  );
};

export default Header;
