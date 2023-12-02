import React, { useState , useEffect} from "react";
import styles from './Schedule.module.css'; 
import Header from "../../components/header/Header.tsx";
import Footer from "../../components/footer/Footer.tsx";
import { Link } from "react-router-dom";

interface Classes {
  day: string;
  className: string;
  time: string;
  trainer: string;
}

const staticClasses: Record<string, Classes[]> = {
  Monday: [
    { day: 'Monday', className: 'Fitness', time: '9:00am - 10:00am', trainer: 'Sarah Rodriquez' },
    { day: 'Monday', className: 'Boxing', time: '11:00am - 12:00am', trainer: 'Alex Turner' },
    { day: 'Monday', className: 'Swimming', time: '1:00pm - 2:00pm', trainer: 'Marcus Carter' },
    { day: 'Monday', className: 'Jogging', time: '3:00pm - 6:pm', trainer: 'Jessica Nguyen' },
  ],
  Tuesday: [
    { day: 'Tuesday', className: 'Yoga', time: '8:00am - 9:00am', trainer: 'Sarah Johnson' },
    { day: 'Tuesday', className: 'CrossFit', time: '6:00am - 7:00am', trainer: 'Mark Davis' },
    { day: 'Tuesday', className: 'Pilates', time: '5:30pm - 6:30pm', trainer: 'Emma White' },
  ],
  Wednesday: [
    { day: 'Wednesday', className: 'Zumba', time: '7:00am - 8:00am', trainer: 'Carlos Rodriguez' },
    { day: 'Wednesday', className: 'Kickboxing', time: '6:00pm - 7:00pm', trainer: 'Lily Chang' },
    { day: 'Wednesday', className: 'Swimming', time: '1:00pm - 2:00pm', trainer: 'Marcus Carter' },
  ],
  Thursday: [
    { day: 'Thursday', className: 'Spinning', time: '6:30am - 7:30am', trainer: 'Ryan Smith' },
    { day: 'Thursday', className: 'Martial Arts', time: '7:00pm - 8:00pm', trainer: 'Katie Lee' },
  ],
  Friday: [
    { day: 'Friday', className: 'Powerlifting', time: '10:00am - 11:00am', trainer: 'Jake Miller' },
    { day: 'Friday', className: 'Dance Fitness', time: '6:30pm - 7:30pm', trainer: 'Sophia Brown' },
    { day: 'Friday', className: 'Swimming', time: '1:00pm - 2:00pm', trainer: 'Marcus Carter' },
  ],
  Saturday: [
    { day: 'Saturday', className: 'HIIT', time: '9:00am - 10:00am', trainer: 'Tony Martinez' },
    { day: 'Saturday', className: 'Cycling', time: '11:00am - 12:00pm', trainer: 'Lisa Taylor' },
  ],
  Sunday: [
    { day: 'Sunday', className: 'Meditation', time: '8:30am - 9:30am', trainer: 'David Wilson' },
    { day: 'Sunday', className: 'Gymnastics', time: '4:00pm - 5:00pm', trainer: 'Olivia Turner' },
  ],
};

const MAX_CLASSES_PER_DAY = 4;

const Schedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [isInitialRender, setIsInitialRender] = useState(true);
  useEffect(() => {
    if (isInitialRender) {
      window.scrollTo(0, 0);
      setIsInitialRender(false);
    }
    if (selectedDay === null) {
      setSelectedDay('Monday');
    }
    console.log('Page loaded');
  }, [selectedDay]); 

  const handleDayClick = (day: string): void => {
    setSelectedDay(day);
  };



  return (    
    <div className={styles.main}>
      <Header />
      <div className="header">
                <div>
                    <h1>Transforming Moments into Productivity</h1>
                </div>
                <h2>Our Schedule</h2>
            </div>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.week}>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
              <div key={day} onClick={() => handleDayClick(day)} className={selectedDay === day ? styles.selectedDay : ''}>
                {day}
              </div>

            ))}
          </div>


          {selectedDay && staticClasses[selectedDay]?.slice(0, MAX_CLASSES_PER_DAY).map((classItem, index) => (
            <div className={styles.classes} key={index}>

              <div>
                <span className={styles.title}>Class Name</span>
                <span className={styles.mainText}>{classItem.className}</span>
              </div>
              <div>
                <span className={styles.title}>Time</span>
                <span className={styles.mainText}>{classItem.time}</span>
              </div>
              <div>
                <span className={styles.title}>Trainer</span>
                <span className={styles.mainText}>{classItem.trainer}</span>
              </div>

                <Link to = '/login'>
              <div>
                <button className={styles.button}>Join Now</button>
                </div>
                </Link>
            </div>

          ))}

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
