import React from 'react';
import styles from './Header.module.css';
import logo from "../../images/logo/logo.png"
function Header() {
    return (
            <div className={styles.main}>
                <div className={styles.logo}>
                <h1 className={styles.text}>Logo</h1>
                {/* <img src={logo} alt="" /> */}
                    </div>
                <div className={styles.navigation}>
                <h1 className={styles.text}>Home</h1>
                <h1 className={styles.text}>About us</h1>
                <h1 className={styles.text}>Pricing</h1>
                <h1 className={styles.text}>Contact</h1>
                </div>
                <div className={styles.join}>
                <h1 className={styles.text}>Sign in</h1>
                </div>
        </div>
    );
}

export default Header;

