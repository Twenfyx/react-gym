import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles}>
            <div className={styles.positions}>
                <h1>Home</h1>
                <h1>About us</h1>
                <h1>Pricing</h1>
                <h1>Contact</h1>
                <h1>Join us</h1>
            </div>
        </div>
    );
}

export default Header;

