import React from "react";
import styles from './Hero.module.css'
import Header from "../header/Header.jsx";

import machineSvg from "../../images/svg/machine.svg"
import treadmilSvg from "../../images/svg/treadmill.svg"
import chestSvg from "../../images/svg/chest.svg"
import yogaSvg from "../../images/svg/yoga.svg"
import shakeSvg from "../../images/svg/shake.svg"
import instagramSvg from "../../images/socialMedia/instagram.svg"
import facebookSvg from "../../images/socialMedia/facebook.svg"
import discordSvg from "../../images/socialMedia/discord.svg"

import { Link } from "react-router-dom";

function Hero(){
    return (
        <div className={styles.main}>
            <div className={styles.photo}>
                <Header />
 
                <div className={styles.container}>
                    <div className={styles.leftSide}>
                        <div className={styles.share}>
                            <p>SHARE</p>

                            <div className={styles.line}></div>
                            <div className={styles.socialMediaSvg}>
                                <img src={instagramSvg} alt="" />
                                <img src={facebookSvg} alt="" />
                                <img src={discordSvg} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className={styles.rightSide}>
                        <h1 className={styles.mainText}>JOIN OUR COMMUNITY</h1>
                        <p >Our gym is not just a place to work out<br />
                            it's a destination for personal <br /> growth and success</p>
                     <Link to='login'> <button className="btn">JOIN NOW</button> </Link>
                    </div>
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
                        <img className={styles.svg} src={yogaSvg} alt="" />
                        <h1 className={styles.blockText}>DIFFERENT CLASSES</h1>
                    </div>

                    <div className={styles.block}>
                        <img className={styles.svg} src={machineSvg} alt="" />
                        <h1 className={styles.blockText}>FANCY GYM MACHINES</h1>
                    </div>

                    <div className={styles.block}>
                        <img className={styles.svg} src={shakeSvg} alt="" />
                        <h1 className={styles.blockText}>PROTEIN SHAKES</h1>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Hero;