import React from "react";
import Header from "../../components/header/Header";
import styles from './LogIn.module.css'
import Map from "../../components/map/Map";
import Footer from "../../components/footer/Footer";
import Newsletter from "../../components/newsletter/Newsletter";

function LogIn() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.body}>
        <div className={styles.container}>
          <input type="checkbox" id={styles.chk} aria-hidden="true" />

          <div className={styles.signup}>
            <form>
              <label htmlFor={styles.chk} aria-hidden="true">Sign up</label>
              <input type="text" name="txt" placeholder="User name" required="" />
              <input type="email" name="email" placeholder="Email" required="" />
              <input type="password" name="pswd" placeholder="Password" required="" />
              <button className={styles.button}>Sign up</button>
            </form>
          </div>

          <div className={styles.login}>
            <form>
              <label htmlFor={styles.chk} aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" required="" />
              <input type="password" name="pswd" placeholder="Password" required="" />
              <button className={styles.button}>Login</button>
            </form>
          </div>
        </div>
      </div>
    <Newsletter />
        <Map />
        <Footer />
    </div>
  );
}

export default LogIn;
