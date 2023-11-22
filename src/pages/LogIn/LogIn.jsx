import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import styles from './LogIn.module.css'


function LogIn(){
    return(
        <div className={styles.main}>
            <Header />
            {/* <Hero /> */}
        </div>
    )
}

export default LogIn;