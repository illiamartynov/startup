import React, { useState, useEffect } from "react";
import styles from "./RightSideHeader.module.css";
import profile from "../../Images/Icons/profile.png";
import language from "../../Images/Icons/language.png";
import profileWhite from "../../Images/Icons/profile_white.png";
import languageWhite from "../../Images/Icons/language_white.png";
import closeMenu from "../../Images/Icons/menuClose.png";
import star from "../../Images/Icons/starsGold.png";
import Registration from "../Registration/Registration";
import Cookies from "js-cookie";
import axios from "axios";
import config from "../../../config";
import { Link } from 'react-router-dom';

const RightSideHeader = ({ isTop, isMenuOpen, setIsMenuOpen }) => {
  const [isMenuRotated, setIsMenuRotated] = useState(false);
  const [initial, setInitial] = useState("A");

  useEffect(() => {
    const userID = Cookies.get("userID");
    if (userID) {
      const token = Cookies.get("bearer_token");
      axios
        .get(`${config.baseUrl}/users/${userID}`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => {
          const firstname = response.data.firstname;
          const firstLetter = firstname.charAt(0);
          setInitial(firstLetter);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const toggleRegistration = () => {
    setIsMenuRotated(!isMenuRotated);
    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileInitialClick = () => {
    Cookies.remove("userID");
    Cookies.remove("bearer_token");
    window.location.reload();
  };

  return (
    <div className={styles.kontaktsWrapper}>
      <div className={styles.innerWrapper}>
        {initial ? (
            <Link to="/application" className={styles.profileButton}>

          <div
            className={`${styles.profileContainer}`} 
          >
            <img src={star} alt="Profile" className={styles.profileImage} />{" "}
              <button className={styles.profileButton}>APP</button>
          </div>
          </Link>

        ) : (
          <img
            src={isTop ? profileWhite : profile}
            alt="Register"
            onClick={toggleRegistration}
          />
        )}

        <img src={isTop ? languageWhite : language} alt="ChangeLng" />
      </div>
      <div
        className={`${styles.registrationOverlay} ${
          isMenuOpen ? styles.open : ""
        }`}
      >
        <div className={styles.registrationWindow}>
          <div className={styles.registrBtnWrapper}>
            <button className={styles.menuBtn} onClick={toggleRegistration}>
              <img
                className={`${styles.menuImg} ${
                  isMenuRotated ? styles.rotate : styles.rotateBack
                } ${styles.openMenu}`}
                src={closeMenu}
                alt="Menu"
              />
            </button>
          </div>
          <div className={styles.qwe}>
            <Registration closeMenu={toggleRegistration} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideHeader;
