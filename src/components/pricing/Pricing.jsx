import React from "react";
import styles from './Pricing.module.css'

function Pricing(){
    return(
        <div className={styles.main}>
        <div className={styles.header}>
            <div>
                <h1>Investing in Unprecedented Success</h1>
            </div>
                <h2>Our Pricing</h2>
            </div>

        <div className={styles.blocks}>
            <div className={styles.mainBlock}>
                <h1>Basic Membership</h1>
                {/* <div> */}
                    <ul>
                        <li>All Basic Membership perks</li>
                        <li>Exclusive group classes</li>
                        <li>Personalized workout plans</li>
                        <li>Monthly nutrition workshops</li>
                        <li>Quarterly fitness challenges</li>
                    </ul>
                <div className={styles.bottom}>
                    <button className="btn">TRY NOW</button>
                    <h2>$29.99/month</h2>
                </div>
            </div>
            <div className={styles.mainBlock}>
                <h1>Premium Membership</h1>
                <ul>
                    <li>All Basic Membership perks</li>
                    <li>Exclusive group classes</li>
                    <li>Personalized workout plans</li>
                    <li>Nutrition consultation discount</li>
                    <li>Monthly nutrition workshops</li>
                    <li>Quarterly fitness challenges</li>

                </ul>
                <div className={styles.bottom}>
                <button className="btn">TRY NOW</button>
                <h2>$49.99/month</h2>
                </div>
            </div>
            <div className={styles.mainBlock}>
                <h1>Elite Membership</h1>
                <ul>
                    <li>All Premium Membership perks</li>
                    <li>Priority workshop booking</li>
                    <li>Sauna and steam room access</li>
                    <li>Quarterly personal trainer sessions</li>
                    <li>VIP access to events</li>
                    <li>VIP concierge service</li>
                    <li>Bi-monthly wellness seminars</li>
                    <li>Exclusive monthly workouts</li>
                </ul>
                <div className={styles.bottom}>
                <button className="btn">TRY NOW</button>
                <h2>$79.99/month</h2>
                </div>
            </div>
        </div>


        </div>
    )
}

export default Pricing;