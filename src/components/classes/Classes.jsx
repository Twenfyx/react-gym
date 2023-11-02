import React from "react";
import styles from "./Classes.module.css"
import swimmingPhoto from "../../images/classes/classes-swimming.jpg"
import gymPhoto from "../../images/classes/classes-gym.jpg"
import yogaPhoto from "../../images/classes/classes-yoga.jpg"
import karatePhoto from "../../images/classes/classes-karate.jpg"
import cardioPhoto from "../../images/classes/classes-cardio.jpg"
import calisthenicsPhoto from "../../images/classes/classes-calisthenics.jpg"

function Classes(){
    return(
        
            <div className={styles.classes}>
                <div className={styles.header}>
                    <h1>Our Classes</h1>
                </div>
                <div className={styles.photosPositions}>
                <div className={styles.photos}>
                
                    <div className={styles.div1}><img src={yogaPhoto} alt="yoga photo" /> </div>
                    <div className={styles.div2}><img src={calisthenicsPhoto} alt="calisthenics photo" /> </div>
                    <div className={styles.div3}><img src={cardioPhoto} alt="cardio photo" /> </div>
                    <div className={styles.div4}><img src={karatePhoto} alt="karate photo" /> </div>
                    <div className={styles.div5}><img src={swimmingPhoto} alt="swimming pool" /> </div>
                    <div className={styles.div6}><img src={gymPhoto} alt="gym photo" /> </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Classes;