import React from "react";
import styles from "./Newsletter.module.css";

function Newsletter(){
    return(
        <div className={styles.main}>
            <div>
            <h1>Subscribe to our newsletter </h1>
            <h3>Stay up to date with our promotions and campaigns</h3>
            </div>
            <input  name="textfield" type="text" placeholder="  Your name" />
            <input  name="textfield" type="text" placeholder="  Your e-mail" />
            <button className="btn">Submit</button>


            
        </div>
    )
}

export default Newsletter;