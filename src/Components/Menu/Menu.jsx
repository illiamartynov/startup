import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={styles.menuWrapper}>
      <button className={styles.menuBtn} onClick={toggleMenu}>
        <img
          className={`${styles.menuImg} ${isOpen ? styles.rotate : ""} ${
            isOpen ? styles.openMenu : styles.closeMenu
          }`}
          src={isOpen ? props.closeMenu : props.openMenu}
          alt="Menu"
        />
      </button>
      <div className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`}>
        <div
          className={`${styles.menuContent} ${isOpen ? styles.showMenu : ""}`}
        >
          <div className={styles.innerFooterWrapper}>
            <ul className={styles.muContentList}>
              <li>
                <a
                  onClick={() => {
                    toggleMenu();
                  }}
                  href="/wizja"
                >
                  wizja
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    toggleMenu();
                  }}
                  href="/aboutUs"
                >
                  Zespół
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    toggleMenu();
                  }}
                  href="/gallery1"
                >
                  galeria
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    toggleMenu();
                  }}
                  href="/cennik"
                >
                  cennik
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    toggleMenu();
                  }}
                  href="/q&a"
                >
                  q&a
                </a>
              </li>
              
            </ul>
            <div className={styles.menuFooter}>
              <h2>Contacts</h2>
              <div className={styles.contactsFooterWrapper}>
                <span>
                  <b>Email:</b> dawid.tambor@vistager.com
                </span>
                <span>
                  <b>Phone:</b> (+48) 505 788 569
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
