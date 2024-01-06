import React from 'react';
import styles from './Header.module.css';
import logo from "../../images/logo/logoRed.svg"
import { Link } from "react-router-dom";

function Header () {
    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                {/* <h1 className={styles.text}>Logo</h1> */}
                <img className={styles.logo} src={logo} alt="" />
            </div>
            <div className={styles.navigation}>
                <Link to="/">
                    <h1 className={styles.text}>Home</h1>
                </Link>

                <Link to="/blog">
                    <h1 className={styles.text}>Blog</h1>
                </Link>
                
              
                <Link to="/gallery">
                    <h1 className={styles.text}>Gallery</h1>
                </Link>
                
                <Link to="/schedule">
                    <h1 className={styles.text}>Schedule</h1>
                </Link>
                
            </div>
            <div className={styles.join}>
                <Link to="/login">
                    <h1 className={styles.text}>Sign in</h1>
                </Link>
            </div>
        </div>
    );
}

export default Header;

