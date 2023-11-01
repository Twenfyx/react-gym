import React from "react";
import styles from './Hero.module.css'
import Header from "../header/Header";

function Hero(){
    return(
        <div className={styles.main}>
            <div className={styles.photo}>
            <Header/>
            <div className={styles.container}>
                <h1 className={styles.mainText}>Join our community</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatum nam numquam odit assumenda ex itaque consequatur beatae, delectus fugiat repudiandae nostrum sed earum. Eos doloremque consequatur non exercitationem ad.</p>
            </div>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <h1 className={styles.blockText}>PROFESSIONAL TRAINERS</h1>
                    </div>
                    <div className={styles.block}>
                        <h1 className={styles.blockText}>MODERN EQUIPMENTS</h1>
                    </div>
                    <div className={styles.block}>
                        <h1 className={styles.blockText}>FANCY GYM MACHINES</h1>
                    </div>
                </div>
            


            </div>
        </div>
    )
}

export default Hero;