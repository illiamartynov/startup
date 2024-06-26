import React, { useState, useEffect } from "react";
import styles from "./LoginComponent.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import google from "../../../Images/Icons/google.png";
import apple from "../../../Images/Icons/apple.png";
import Error from "../../ErrorMessage/Error"; 
import config from '../../../../config';

const LoginComponent = ({ show, closeMenu }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const jwtToken = params.get("jwt");
    const userId = params.get("userId");

    if (jwtToken && userId) {
      Cookies.set("bearer_token", jwtToken);
      Cookies.set("userID", userId);
      const cleanUrl = window.location.pathname;
      window.history.pushState({}, document.title, cleanUrl);
    }
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (!email || !password) {
        setErrorMessage("You have not filled in all fields");
        return;
      }

      const response = await axios.post(`${config.baseUrl}/auth/login`, {
        email: email,
        password: password,
      });

      const { id } = response.data;
      console.log("User ID:", id);

      const authToken = response.headers.authorization;
      const expiresAt = new Date();
      expiresAt.setSeconds(expiresAt.getSeconds() + 3600);
      Cookies.set("userID", id, { expires: expiresAt });
      Cookies.set("bearer_token", authToken, { expires: expiresAt });

      setEmail("");
      setPassword("");
      setErrorMessage("");
      closeMenu();

      window.location.reload();
    } catch (error) {
      console.error("Error sending request:", error);
      if (error.response) {
        switch (error.response.status) {
          case 400:
          case 401:
            setErrorMessage("Wrong Credentials");
            break;
          case 409:
            setErrorMessage("This email address is already in use");
            break;
          case 403:
            setErrorMessage("Access forbidden");
            break;
          case 404:
            setErrorMessage("Server not found");
            break;
          case 500:
            setErrorMessage("Internal server error");
            break;
          default:
            setErrorMessage("Something went wrong");
        }
      } else if (error.code === "ERR_NETWORK") {
        setErrorMessage("Server problems, please try again later");
      } else {
        setErrorMessage("Something went wrong");
      }
    }
  };

  return (
    <div className={`${styles.registInputs} ${show ? "" : styles.hidden}`}>
      {errorMessage && <Error text={errorMessage} />}
      <h1>Zaloguj się</h1>
      <label htmlFor="loginEmail">E-mail</label>
      <input
        id="loginEmail"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="loginPassword">Haslo</label>
      <input
        id="loginPassword"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleSubmit}>Sign in</button>
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

export default LoginComponent;
