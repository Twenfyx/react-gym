import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter:React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Subscribe to our newsletter </h1>
                <h3>Stay up to date with our promotions and campaigns</h3>
            </div>
            <input className={styles.el} name="textfield" type="text" placeholder="  Your name" />
            <input className={styles.el} name="textfield" type="text" placeholder="  Your e-mail" />
            <button className={`btn ${styles.el}`}>Submit</button>

        </div>
    )
}

export default Newsletter;