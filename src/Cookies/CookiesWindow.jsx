import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import styles from "./CookiesWindow.module.css";

const CookiesWindow = () => {
  const defaultState = {
    Wymagane: true,
    Preferance: false,
    Statystyka: false,
    Marketing: false,
  };

  const [buttonsState, setButtonsState] = useState(() => {
    const savedState = Cookies.get("cookiesState");
    return savedState ? JSON.parse(savedState) : defaultState;
  });
  const [showWindow, setShowWindow] = useState(() => {
    return !Cookies.get("cookiesState");
  });

  const buttons = [
    { name: "Wymagane" },
    { name: "Preferance" },
    { name: "Statystyka" },
    { name: "Marketing" },
  ];

  const handleButtonClick = (name) => {
    setButtonsState((prevState) => {
      const newState = {
        ...prevState,
        [name]: !prevState[name],
      };
      Cookies.set("cookiesState", JSON.stringify(newState), { expires: 365 });
      return newState;
    });
  };

  useEffect(() => {
    if (!Cookies.get("cookiesState")) {
      const timeout = setTimeout(() => {
        setShowWindow(true);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    Cookies.set("cookiesState", JSON.stringify(buttonsState), { expires: 365 });
  }, [buttonsState]);

  const handleAcceptAll = () => {
    const newState = {
      Wymagane: true,
      Preferance: true,
      Statystyka: true,
      Marketing: true,
    };
    setButtonsState(newState);
    Cookies.set("cookiesState", JSON.stringify(newState), { expires: 365 });
    setShowWindow(false);
  };

  const handleAcceptSelected = () => {
    Cookies.set("cookiesState", JSON.stringify(buttonsState), { expires: 365 });
    setShowWindow(false);
  };

  const handleRejectAll = () => {
    const newState = {
      Wymagane: false,
      Preferance: false,
      Statystyka: false,
      Marketing: false,
    };
    setButtonsState(newState);
    Cookies.set("cookiesState", JSON.stringify(newState), { expires: 365 });
    setShowWindow(false);
  };

  return (
    <div className={`${styles.wrapper} ${showWindow ? styles.show : ""}`}>
      <div className={styles.innerWrapper}>
        <div className={styles.wrapperBtnAndText}>
          <div className={styles.textWrapper}>
            <h1>Cookies</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </div>
          <div className={styles.settingBtnsWrapper}>
            <div className={styles.row}>
              {buttons.map((button, index) => (
                <div key={index} className={styles.toggleWrapper}>
                  <span>{button.name}</span>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={buttonsState[button.name]}
                      onChange={() => handleButtonClick(button.name)}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.butnsWrapper}>
          <button onClick={handleAcceptAll}>Akceptuj wszystko</button>
          <button onClick={handleAcceptSelected}>Akceptuj wybrane</button>
          <button onClick={handleRejectAll}>Nie akceptuj</button>
        </div>
      </div>
    </div>
  );
};

export default CookiesWindow;
