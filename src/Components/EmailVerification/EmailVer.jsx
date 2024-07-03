import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import styles from "./EmailVer.module.css";
import config from '../../../config';

const EmailVer = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const currentUrl = window.location.href;
    const queryString = currentUrl.substring(currentUrl.indexOf("?") + 1);
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get("token");
    const userId = urlParams.get("userId");
    const apiUrl = `${config.baseUrl}/auth/register/${userId}/email/verification`;

    const params = {
      token: token,
    };

    axios
      .get(apiUrl, { params })
      .then((response) => {
        const authToken = response.headers.authorization;
        
        Cookies.set("bearer_token", authToken);

        navigate("/");
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
      });
  };

  return (
    <button onClick={handleButtonClick} className={styles.confirmButton}>
      Confirm Email
    </button>
  );
};

export default EmailVer;
