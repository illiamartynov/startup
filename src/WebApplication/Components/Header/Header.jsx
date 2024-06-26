import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../../Images/Icons/blackLogo.png";
import profile from "../../../Images/Icons/profileBlack.png";
import signOut from "../../../Images/Icons/signOut.png";
import { useNavigate } from "react-router-dom";
import favs from "../../../Images/Icons/favs.png";
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";

import Balance from "./Balance/Balance";

const Header = () => {
  const navigate = useNavigate();

  const handleProfileInitialClick = () => {
    Cookies.remove("userID");
    Cookies.remove("bearer_token");
    navigate("/");
  };
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
        <div className={styles.headerInfo}>
          <Balance className={styles.balanceWrapper} />
          <img src={favs} alt="Favorites" />
          <img src={signOut} alt="Profile" onClick={handleProfileInitialClick} />
        </div>
      </div>
    </div>
  );
};

export default Header;
