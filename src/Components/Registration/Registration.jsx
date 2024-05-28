import React, { useState } from "react";
import styles from "./Registration.module.css";
import RegistrationComponent from "./RegistrationComponent/RegistrationComponent";
import LoginComponent from "./LoginComponent/LoginComponent";
import logo from "../../Images/Icons/vistager_logo.png"
const Registration = ({ closeMenu }) => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleRegistrationClick = () => {
    setShowRegistration(false);
    setShowLogin(true);
  };

  const handleLoginClick = () => {
    setShowRegistration(true);
    setShowLogin(false);
  };

  return (
    <div className={styles.headerWrapper}>
      <img className={styles.imgLogo} src={logo}/>
      <div className={styles.componentsWrapper}>
        <RegistrationComponent show={showRegistration} />
        <LoginComponent closeMenu={closeMenu} show={showLogin} />
      </div>
      <div className={styles.btnsWrapper}>
        {showLogin && (
          <div>
          <span>Nie masz konta? </span>
          <button
          className={`${styles.activeButton} ${styles.registrBtns}`}
          onClick={handleLoginClick}
        >
          Zarejestruj się
        </button>
        </div>
        )}
        {showRegistration && (
          <div className={styles.logInRegistrVariants}>
            <span>Masz juz konto? </span>
            <button
            className={`${styles.activeButton} ${styles.registrBtns}`}
            onClick={handleRegistrationClick}
          >
            Zaloguj się
          </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
