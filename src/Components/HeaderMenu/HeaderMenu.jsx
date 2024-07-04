import React, { useEffect } from "react";
import styles from "./HeaderMenu.module.css";
import { Link } from "react-router-dom";

const HeaderMenu = ({ scrolled }) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <ul className={`${styles.listWrapper} ${scrolled ? styles.scrolledMenu : ""}`}>
      <li>
        <a href="/wizja">wizja</a>
      </li>
      <li>
        <a href="/q&a">o nas</a>
      </li>
      <li>
        <a href="/">galeria</a>
      </li>
      <li>
        <a href="/">cennik</a>
      </li>
      <li>
        <a href="/q&a">q&a</a>
      </li>
    </ul>
  );
};

export default HeaderMenu;
