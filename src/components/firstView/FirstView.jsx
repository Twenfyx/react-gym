import React from "react";
import styles from './FirstView.module.css'
import Header from "../header/Header";

function FirstView(){
    return(
        <div className={styles}>
            <div className={styles.photo}>
            <Header/>
            <div className={styles.container}>
                <h1>BECOME AN ATHLETE</h1>
            </div>
                
            


            </div>
        </div>
    )
}

export default FirstView;