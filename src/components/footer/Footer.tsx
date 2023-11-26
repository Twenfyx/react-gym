import React from "react";
import styles from "./Footer.module.css"
import discord from"../../images/footer/discord.png"
import facebook from"../../images/footer/facebook.png"
import github from"../../images/footer/github.png"
import instagram from"../../images/footer/instagram.png"
import linkedin from"../../images/footer/linkedin.png"
import telegram from"../../images/footer/telegram.png"
import youtube from"../../images/footer/youtube.png"

const Footer:React.FC = () => {
    return(
        <div className={styles.main}>
            <div className={styles.container}>
            <h1>About us</h1>
            <p>
            Your fitness journey begins at ReactGym. <br />
            Welcome to a place where sweat turns into success,
            <br /> and dreams turn into reality.
          </p>
          <div className={styles.icons}>
            <img src={discord} alt="" />
            <img src={facebook} alt="" />
            <img src={github} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={telegram} alt="" />
            <img src={youtube} alt="" />
          
          </div>
          <hr className={styles.hr}/>
            {/* <h1>Social Links</h1> */}
            <div className={styles.bottom}>
                <h1>Privacy Policy | © 2023 ReactGym</h1>
                <h1>Design by Arseni Ramanouski</h1>
            </div>
            </div>
        </div>
    )
}

export default Footer;