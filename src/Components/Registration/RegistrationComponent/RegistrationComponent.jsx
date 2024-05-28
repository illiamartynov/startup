import React, { useState, useCallback } from "react";
import axios from "axios";
import styles from "../LoginComponent/LoginComponent.module.css";
import Error from "../../ErrorMessage/Error";
import google from "../../../Images/Icons/google.png";
import apple from "../../../Images/Icons/apple.png";
import config from '../../../../config';


const RegistrationComponent = ({ show }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    secondName: "",
    password: "",
    isRecipient: false,
    errorMessage: "",
  });

  const handleChange = useCallback((field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
      errorMessage: "",
    }));
  }, []);

  const handleSubmit = useCallback(async () => {
    const { name, email, secondName, password, isRecipient } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !secondName.trim() ||
      !password.trim()
    ) {
      setFormData((prevState) => ({
        ...prevState,
        errorMessage: "Please fill in all the fields.",
      }));
      return;
    }

    if (password.length < 8) {
      setFormData((prevState) => ({
        ...prevState,
        errorMessage: "The password must contain at least 8 characters.",
      }));
      return;
    }

    if (!emailIsValid(email)) {
      setFormData((prevState) => ({
        ...prevState,
        errorMessage: "Please enter a correct email address.",
      }));
      return;
    }

    const requestData = {
      firstname: name,
      lastname: secondName,
      email: email,
      password: password,
      isLetterRecipient: isRecipient,
    };

    try {
      const response = await axios.post(
        `${config.baseUrl}/auth/register`,
        requestData
      );

      console.log("Registration successful!", response.data);

      window.location.reload();
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.code === "ERR_NETWORK") {
        setFormData((prevState) => ({
          ...prevState,
          errorMessage: "Server problems, try again later",
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          errorMessage: "Something went wrong",
        }));
      }
    }
  }, [formData]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className={`${styles.registInputs} ${show ? "" : styles.hidden}`}>
      {formData.errorMessage && <Error text={formData.errorMessage} />}
      <h1>Zarejestruj się</h1>
      <label htmlFor="name">Imię</label>
      <input
        id="name"
        type="text"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <label htmlFor="secondName">Nazwisko</label>
      <input
        id="secondName"
        type="text"
        value={formData.secondName}
        onChange={(e) => handleChange("secondName", e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <label htmlFor="registrationEmail">Email</label>
      <input
        id="registrationEmail"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <label htmlFor="registrationPassword">Haslo</label>
      <input
        id="registrationPassword"
        type="password"
        value={formData.password}
        onChange={(e) => handleChange("password", e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <label style={{ fontWeight: "normal" }}>
        <input
          type="checkbox"
          checked={formData.isRecipient}
          onChange={(e) => handleChange("isRecipient", e.target.checked)}
        />
        Sign for Newsletter
      </label>
      <button onClick={handleSubmit}>Register</button>
      <div className={styles.socialNets}>
        <a href={`${config.baseUrlGoogle}/oauth2/authorization/google`}>
          <img alt="google registration" src={google} />
        </a>
        <a href="#">
          <img alt="apple registration" src={apple} />
        </a>
      </div>
    </div>
  );
};

export default RegistrationComponent;
