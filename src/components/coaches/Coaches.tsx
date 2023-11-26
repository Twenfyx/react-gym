import React, { useState } from "react";
import styles from "./Coaches.module.css";

import coach1Img from "../../images/coaches/1.png";
import coach2Img from "../../images/coaches/2.png";
import coach3Img from "../../images/coaches/3.png";
import coach4Img from "../../images/coaches/4.png";
import coach5Img from "../../images/coaches/5.png";

import instagram from "../../images/footer/instagram.png";
import facebook from "../../images/footer/facebook.png";
import discord from "../../images/footer/discord.png";

interface Coach{
  img:string;
  name:string;
  description:string;
}

let coachesData:Coach[] = [
  {
    img: coach1Img,
    name: "Sarah Rodriguez",
    description:
      "Seasoned fitness enthusiast with expertise in strength and conditioning, Sarah's dynamic sessions focus on personalized plans, empowering clients for remarkable results.",
  },
  {
    img: coach2Img,
    name: "Alex Turner",
    description:
    " Certified nutrition specialist and fitness coach, Alex combines dietary expertise with dynamic training, fostering an inclusive gym community through holistic wellness plans.",
},
  {
    img: coach3Img,
    name: "Marcus Carter",
    description:
      " Former pro athlete Marcus specializes in sports-specific training, motivating individuals to reach their potential, preventing injuries, and enhancing overall performance.",
  },
  {
    img: coach4Img,
    name: "Jessica Nguyen",
    description:
      "Jessica, with a background in yoga and mindfulness, guides clients to physical and mental harmony, emphasizing balance and flexibility in a positive atmosphere.",
  },
  {
    img: coach5Img,
    name: "Ryan Mitchell",
    description:
      "A dedicated personal trainer for over two decades, Ryan specializes in transformative fitness programs, instilling confidence and lifelong health commitment.",
  },
];

function Coaches() {
  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(1);
  const [third, setThird] = useState<number>(2);

  const prev = () => {
    setFirst((first - 1 + coachesData.length) % coachesData.length);
    setSecond((second - 1 + coachesData.length) % coachesData.length);
    setThird((third - 1 + coachesData.length) % coachesData.length);
  };

  const next = () => {
    setFirst((first + 1) % coachesData.length);
    setSecond((second + 1) % coachesData.length);
    setThird((third + 1) % coachesData.length);
  };

  return (
    <div className={styles.main}>
      <div className="header">
        <div>
          <h1>Training the Champions of Tomorrow</h1>
        </div>
        <h2>Our Coaches</h2>
      </div>

      <div className={styles.coaches}>
        <div className={styles.anotherCoach}>
          <div className={styles.info1}>
            <img
              className={styles.mainImage}
              src={coachesData[first].img}
              alt=""
            />
          </div>
          <div className={styles.between}>
            <div className={styles.line}></div>
          </div>

          <div className={styles.info2}>
            <p className={styles.name}>{coachesData[first].name}</p>
            <p className={styles.description}>
              {coachesData[first].description}
            </p>
            <div className={styles.icons}>
              <img src={instagram} alt="" />
              <img src={discord} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.mainCoach}>
          <div className={styles.info1}>
            <img
              className={styles.mainImage}
              src={coachesData[second].img}
              alt=""
            />
          </div>
          <div className={styles.between}>
            <div className={styles.line}></div>
          </div>

          <div className={styles.info2}>
            <p className={styles.name}>{coachesData[second].name}</p>
            <p className={styles.description}>
              {coachesData[second].description}
            </p>
            <div className={styles.icons}>
              <img src={instagram} alt="" />
              <img src={discord} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.anotherCoach}>
          <div className={styles.info1}>
            <img
              className={styles.mainImage}
              src={coachesData[third].img}
              alt=""
            />
          </div>
          <div className={styles.between}>
            <div className={styles.line}></div>
          </div>

          <div className={styles.info2}>
            <p className={styles.name}>{coachesData[third].name}</p>
            <p className={styles.description}>
              {coachesData[third].description}
            </p>
            <div className={styles.icons}>
              <img src={instagram} alt="" />
              <img src={discord} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
        </div>
      </div>

    <div className={styles.buttons}>
      <button  className={styles.button} onClick={prev}>&#8592;  Prev </button>
        <button  className={styles.button} onClick={next}>Next &rarr;</button>
        </div>
    </div>
  );
}

export default Coaches;
