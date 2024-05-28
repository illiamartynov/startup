import React from "react";
import styles from "./RegistrationAdd.module.css";
import signUpBtn from "../../Images/Icons/signUpBtn.png"
const RegistrationAdd = ({ toggleMenu }) => {
  return <div className={styles.addWrapper}>
    <div className={styles.addWrapperInnerWrapper}>
        <div className={styles.textWrapper}>
        <span>
            Zarejestruj się i wyprobój za darmo!!
        </span>
        <button onClick={toggleMenu}><img src={signUpBtn}/></button>
        </div>
    </div>
  </div>;
};

export default RegistrationAdd;
