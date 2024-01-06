import React from "react";
import styles from './Blog.module.css'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import img1 from "../../images/blog/1.jpg"
import img2 from "../../images/blog/2.jpg"
import img3 from "../../images/blog/3.jpg"
import img4 from "../../images/blog/4.jpg"
// import search from "../../images/blog/search.png"

const posts = {
    post1: [
        {
            img: img1,
            dateCategory: 'March 5, 2023 | Mindfulness',
            title: 'Introduction to Mindfulness Meditation',
            description: 'Embark on a transformative journey into mindfulness meditation. This post will guide you through the fundamentals of mindfulness, helping you cultivate inner peace and emotional well-being. Explore various meditation techniques and practical tips to integrate mindfulness into your daily life.'
        }
    ],
    post2: [
        {
            img: img2,
            dateCategory: 'April 21, 2023 | Stress Management',
            title: 'Effective Stress Reduction Strategies',
            description: 'In this comprehensive guide, discover powerful strategies to manage and reduce stress in your life. From time-tested relaxation techniques to actionable lifestyle changes, we cover it all. Join us on a journey towards a calmer and more balanced life.'
        }
    ],
    post3: [
        {
            img: img3,
            dateCategory: 'January 6, 2024 | Healthy Habits',
            title: 'Building Healthy Habits: A Holistic Approach',
            description: 'Learn how to cultivate and sustain healthy habits for a thriving life. This post delves into the science of habit formation, providing practical insights and actionable steps to create positive routines. Explore the mind-body connection and unleash your full potential.'
        }
    ],
    post4: [
        {
            img: img4,
            dateCategory: 'February 21, 2024 | Fitness Journey',
            title: 'Embarking on a Fitness Journey: Your Guide to Success',
            description: 'Join us as we embark on a fitness journey together. This post is your go-to resource for building a sustainable fitness routine, incorporating both exercise and nutrition tips. From setting realistic goals to overcoming challenges, we cover everything you need for a successful fitness journey.'
        }
    ]
};

function Blog() {
    return (
        <div className={styles.main}>
            <Header />

            <div className="header">
                <div>
                    <h1>Stay Unfailingly Inspired with Gym News</h1>
                </div>
                <h2>Our Blog</h2>
            </div>

            <div className={styles.body}>
                <div className={styles.layout}>
                    <div className={styles.blocks}>

                        {Object.keys(posts).map(postKey => (
                            <div key={postKey} className={styles.block}>
                                <div className={styles.image}>
                                    <img src={posts[postKey][0].img} alt="" />
                                </div>
                                <div className={styles.date}>{posts[postKey][0].dateCategory}</div>
                                <div className={styles.info}>
                                    <p className={styles.title}>{posts[postKey][0].title}</p>
                                    <p className={styles.description}>{posts[postKey][0].description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className={styles.miniBlocks}>
                <div className={styles.miniBlock}> 
                <div className={styles.miniImg}> 
                    <img src={img1} alt="" />
                </div>
                <div className={styles.minititle}></div>
                </div>
            </div> */}
                    {/* <div className={styles.searchBlock}>
            <input className={styles.search} type="text" placeholder="Search.."/>
            <img src={search} alt="" />
            </div>*/}
                    <select className={styles.categories}>
                        <option value="all">New</option>
                        <option value="option2">Meditation</option>
                        <option value="option3">Sport</option>
                    </select>

                    {/* <option value="option1">Option 1</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option> */}




                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Blog;