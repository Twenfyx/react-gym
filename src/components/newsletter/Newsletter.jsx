import React from "react";
import styles from "./Newsletter.module.css";

function Newsletter(){
    return(
        <div className={styles.main}>
            <h1>Subscribe to our newsletter </h1>
            <h2>Stay up to date with melon promotions and campaigns</h2>

            <input type="text" name="Your name"/>
            <input type="email" />


            
        </div>
    )
}

export default Newsletter;