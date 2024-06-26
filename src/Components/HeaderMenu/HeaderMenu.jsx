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
        <a href="/#projects">projekty</a>
      </li>
      <li>
        <a href="/q&a">Q&A</a>
      </li>
      <li>
        <a href="/#gallery1">galeria</a>
      </li>
      <li>
        <a href="/#Kontakts">kontakt</a>
      </li>
    </ul>
  );
};

export default HeaderMenu;
