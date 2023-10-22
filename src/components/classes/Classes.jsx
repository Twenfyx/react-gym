import React from "react";
import styles from "./Classes.css"
import swimmingPhoto from "../../images/classes/classes-swimming.jpg"
import gymPhoto from "../../images/classes/classes-gym.jpg"
import yogaPhoto from "../../images/classes/classes-yoga.jpg"
import karatePhoto from "../../images/classes/classes-karate.jpg"
import cardioPhoto from "../../images/classes/classes-cardio.jpg"
import calisthenicsPhoto from "../../images/classes/classes-calisthenics.jpg"

function Classes(){
    return(
        <div className={styles}>
            <div className="classes">
                <div className="header">
                    <h1>Our Classes</h1>
                </div>
                <div className="photos-positions">
                <div className="photos">
                
                    <div className="div1"><img src={yogaPhoto} alt="swimming pool" /> </div>
                    <div className="div2"><img src={karatePhoto} alt="swimming pool" /> </div>
                    <div className="div3"><img src={swimmingPhoto} alt="swimming pool" /> </div>
                    <div className="div4"><img src={gymPhoto} alt="swimming pool" /> </div>
                    <div className="div5"><img src={calisthenicsPhoto} alt="swimming pool" /> </div>
                    <div className="div6"><img src={cardioPhoto} alt="swimming pool" /> </div>
                    
              
                </div>
            </div>
        </div>
        </div>
    )
}

export default Classes;