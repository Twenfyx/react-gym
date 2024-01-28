import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logo from '../../images/logo/logoRed.svg';
import { Link } from 'react-router-dom';
import menu from '../../images/svg/menu.svg';
import close from '../../images/svg/close.svg';

function Header() {
    const [hamburger, setHamburger] = useState(false);

    const hamburgerMenu = () => {
        setHamburger(!hamburger);
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    const updateIsMobile = () => {
        setIsMobile(window.innerWidth < 600);
    };

    useEffect(() => {
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);
        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.logo}>
                    <img className={styles.logo} src={logo} alt="" />
                </div>
                {isMobile ? (
                    <>
                        <div onClick={hamburgerMenu}>
                            <img className={styles.menuSvg} src={menu} alt="" />
                        </div>
                        <div className={`${styles.hamburger} ${hamburger ? styles.open : styles.closed}`}>
                            <div className={styles.closeSvg}>
                                <div onClick={hamburgerMenu}>
                                    <img src={close} alt="" />
                                </div>
                            </div>

                            <Link to="/">
                                <h1 onClick={hamburgerMenu} className={styles.text}>Home</h1>
                            </Link>

                            <Link to="/blog">
                                <h1 onClick={hamburgerMenu} className={styles.text}>Blog</h1>
                            </Link>
                            <Link to="/gallery">
                                <h1 onClick={hamburgerMenu} className={styles.text}>Gallery</h1>
                            </Link>
                            <Link to="/schedule">
                                <h1 onClick={hamburgerMenu} className={styles.text}>Schedule</h1>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>


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
                    </>
                )}

                <div className={styles.join}>

                    <Link to="/login">
                        <h1 className={styles.text}>Sign in</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
