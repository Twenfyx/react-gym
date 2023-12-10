import React from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Gallery.module.css";
import photo1 from "../../images/gallery/1.jpg";
import photo2 from "../../images/gallery/2.jpg";
import photo3 from "../../images/gallery/3.jpg";
import photo4 from "../../images/gallery/4.jpg";
import photo5 from "../../images/gallery/5.jpg";

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.body}>
        <div className="header">
          <div>
            <h1>Inspiration Captured in Exquisite Frames</h1>
          </div>
          <h2>Our Gallery</h2>
        </div>

        <div className={styles.img}>
          <section className={styles.container}>
            <div className={styles.sliderWrapper}>
              <div className={styles.slider}>
                <img src={currentSlide === 1 ? photo1 :
                          currentSlide === 2 ? photo2 :
                          currentSlide === 3 ? photo3 :
                          currentSlide === 4 ? photo4 : photo5} alt="" />
              </div>
              <div className={styles.sliderNav}>
                <div onClick={() => handleSlideChange(1)}></div>
                <div onClick={() => handleSlideChange(2)}></div>
                <div onClick={() => handleSlideChange(3)}></div>
                <div onClick={() => handleSlideChange(4)}></div>
                <div onClick={() => handleSlideChange(5)}></div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;
