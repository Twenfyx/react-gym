import React from 'react'
import styles from './CoachesBanner.module.css'
import { Link } from 'react-router-dom';

const CoachBanner:React.FC = ()=> {
    return (
        <div className={styles.main}>
            <div>
                <h1>Looking For Fitness Trainer?</h1>
                <div className={styles.btnDiv}>
                    <Link to='login'>
                        <button className="btn">Purchase Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CoachBanner;