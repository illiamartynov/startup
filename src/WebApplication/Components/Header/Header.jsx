import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../../Images/Icons/blackLogo.png";
import profile from "../../../Images/Icons/profileBlack.png";
import favs from "../../../Images/Icons/favs.png";
import { Link } from 'react-router-dom';

import Balance from "./Balance/Balance";

const Header = () => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
        <div className={styles.headerInfo}>
          <Balance className={styles.balanceWrapper} />
          <img src={favs} alt="Favorites" />
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
