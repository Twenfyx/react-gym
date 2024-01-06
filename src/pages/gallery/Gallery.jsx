import React from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Gallery.module.css";
import photo1 from "../../images/gallery/3.jpg";
import photo2 from "../../images/gallery/2.jpg";
import photo3 from "../../images/gallery/1.jpg";
import photo4 from "../../images/gallery/4.jpg";
import photo5 from "../../images/gallery/5.jpg";
import photo6 from "../../images/gallery/6.jpg";
// import photo7 from "../../images/gallery/7.jpg";

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(3);

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
                          currentSlide === 4 ? photo4 : 
                          currentSlide === 5 ? photo5 : photo6 } alt="" />
              </div>
      <div className={styles.sliderNav}>
  {[1, 2, 3, 4, 5, 6 ].map((slideNumber) => (
    <div
      key={slideNumber}
      className={`${currentSlide === slideNumber ? styles.active : ""}`}
      onClick={() => handleSlideChange(slideNumber)}
    ></div>
  ))}
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
