import React from "react";
import styles from "./RegistrationAdd.module.css";
import signUpBtn from "../../Images/Icons/signUpBtn.png";
const RegistrationAdd = ({ toggleMenu }) => {
  return (
    <div className={styles.addWrapper}>
      <div className={styles.addWrapperInnerWrapper}>
        <div className={styles.textWrapper}>
          <span className={styles.title}>
            Chcesz dołączyć do grona innowatorów w branży nieruchomości?
          </span>
          <div>
          <span className={styles.text}>
            <span>100</span> osób wybranych spośród pierwszych zarejestrowanych klientów
            dostanie od nas <span>BEZPŁATNIE</span> wczesny dostęp oraz szansę na pakiet
            <span> BIZNES</span> w rocznej subskrypcji o wartości<span> 2999 zł</span>.
          </span>
          <button onClick={toggleMenu}>
            <img src={signUpBtn} />
          </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RegistrationAdd;
