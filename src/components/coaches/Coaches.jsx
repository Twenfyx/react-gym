import React from "react";
import styles from "./Coaches.module.css"

function Coaches(){
    return (
        <div className={styles.main}>
            <h1 className={styles.h1}>Our Coaches</h1>
            <div className={styles.container}>
                <div className={styles.coach}>1</div>
                <div className={styles.coach}>2</div>
                <div className={styles.coach}>3</div>
            </div>
        </div>
    )
}

export default Coaches; 