import React from "react";
import styles from "./Coaches.module.css"

function Coaches(){
    return (
        <div className={styles.main}>
            {/* <hr className={styles.hr}/> */}
                <div className={styles.header}>
                    <div>
                    <h1>Training the Champions of Tomorrow</h1>
                    </div>
                    <h2>Our Coaches</h2> 
                </div>

            <div className={styles.container}>
                <div className={styles.coach}>1</div>
                <div className={styles.coach}>2</div>
                <div className={styles.coach}>3</div>
            </div>
        </div>
    )
}

export default Coaches; 