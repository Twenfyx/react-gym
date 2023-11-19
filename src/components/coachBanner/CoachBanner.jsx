import react from 'react'
import styles from './CoachesBanner.module.css'
function CoachBanner(){
    return(
        <div className={styles.main}>
            <div>
                <h1>Looking For Fitness Trainer?</h1>
            <div className={styles.btnDiv}>

                <button className={styles.btn}>Purchase Now</button>
            </div>
            </div>
        </div>
    )
}

export default CoachBanner;