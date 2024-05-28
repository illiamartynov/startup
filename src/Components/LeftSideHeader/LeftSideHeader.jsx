import React from 'react';
import styles from "./LeftSideHeader.module.css";
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
const LeftSideHeader = (props) => {
    return(
        <div className={styles.headerWrapper}>
            <div className={styles.headerLeftSideWrapper}>
                <Menu  openMenu={props.openMenu} closeMenu={props.closeMenu}/>
                <Link to="/">
                    <img className={styles.logoImg} src={props.logo} alt="logo" />
                </Link>
            </div>
        </div>
    )
}

export default LeftSideHeader