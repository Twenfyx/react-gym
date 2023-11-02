import React from "react";
import styles from './Hero.module.css'
import Header from "../header/Header";
import machineSvg from "../../images/svg/machine.svg"
import treadmilSvg from "../../images/svg/treadmill.svg"
import chestSvg from "../../images/svg/chest.svg"

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
                        <img className={styles.svg} src={chestSvg} alt="" />
                        <h1 className={styles.blockText}>PROFESSIONAL TRAINERS</h1>
                    </div>
                    <div className={styles.block}>
                        <img className={styles.svg} src={treadmilSvg} alt="" />
                        <h1 className={styles.blockText}>MODERN EQUIPMENTS</h1>
                    </div>
                    <div className={styles.block}>
                    <img className={styles.svg} src={machineSvg} alt="" />
                        <h1 className={styles.blockText}>FANCY GYM MACHINES</h1>
                    </div>
                </div>
            


            </div>
        </div>
    )
}

export default Hero;