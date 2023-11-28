import React from "react";
import Header from "../../components/header/Header.tsx";
import styles from './LogIn.module.css'
import Map from "../../components/map/Map.tsx";
import Footer from "../../components/footer/Footer.tsx";



const LogIn:React.FC = () => {
  window.scrollTo(0, 0);
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.body}>
        <div className={styles.container}>
          <input type="checkbox" id={styles.chk} aria-hidden="true" />

          <div className={styles.signup}>
            <form>
              <label htmlFor={styles.chk} aria-hidden="true">Sign up</label>
              <input type="text" name="txt" placeholder="User name"  />
              <input type="email" name="email" placeholder="Email"  />
              <input type="password" name="pswd" placeholder="Password"  />
              <button className={styles.button}>Sign up</button>
            </form>
          </div>

          <div className={styles.login}>
            <form>
              <label htmlFor={styles.chk} aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email"  />
              <input type="password" name="pswd" placeholder="Password" />
              <button className={styles.button}>Login</button>
            </form>
          </div>
        </div>
      </div>
    {/* <Newsletter /> */}
        {/* <Map /> */}
        <Footer />
    </div>
  );
}

export default LogIn;
