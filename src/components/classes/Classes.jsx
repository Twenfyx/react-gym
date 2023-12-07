import React from "react";
import styles from "./Classes.module.css"
import { Link } from 'react-router-dom';

function Classes(){
    return (

        <div className={styles.classes}>

 
            <div className="header">
                <div>
                    <h1>The Road to Athletic Success Starts Here</h1>
                </div>
                <h2>Our Classes</h2>
            </div>
            
            <Link to= '/schedule'>
            <div className={styles.container}>
                <div className={styles.photos}>
                     
                    <div className={styles.div1}>
                        <div className={styles.photoText}>
                            <h1>Yoga</h1>
                            <p>Monday:8:00am-10:00am</p>
                        </div>
                    </div>
                    <div className={styles.div2}>
                        <div className={styles.photoText}>
                            <h1>Workout</h1>
                            <p>Sunday:9:00am-1:00pm</p>
                        </div>
                    </div>
                    <div className={styles.div3}>
                        <div className={styles.photoText}>
                            <h1>Cardio</h1>
                            <p>Friday:8:00am-10:00am</p>
                        </div>
                    </div>
                    <div className={styles.div4}>
                        <div className={styles.photoText}>
                            <h1>Karate</h1>
                            <p>Thursday:1:00pm-2:00pm</p>
                        </div>
                    </div>
                    <div className={styles.div5}>
                        <div className={styles.photoText}>
                            <h1>Swimming</h1>
                            <p>Tuesday:7:00am-8:00am</p>
                        </div>
                    </div>
                    <div className={styles.div6}>
                        <div className={styles.photoText}>
                            <h1>Lifting</h1>
                            <p>Monday:5:00pm-7:00pm</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            </Link>
        </div>

    )
}

export default Classes;