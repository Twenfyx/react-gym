import React from "react";
import styles from './Statistics.module.css'


const Statistics:React.FC = () => {
    return(
            <div className={styles.container}>
                <div>
                <p className={styles.textAmount}>300</p>
                <p className={styles.textMain}>Equipment</p>
                </div>
                <div>
                <p className={styles.textAmount}>200</p>
                <p className={styles.textMain}>Park space</p>
                </div>
                <div>
                <p className={styles.textAmount}>22</p>
                <p className={styles.textMain}>Coaches</p>
                </div>
            
        </div>
    )
}

export default Statistics;