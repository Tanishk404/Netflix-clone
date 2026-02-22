import React from 'react';
import styles from './Home.module.css';
import Navbar from '../../componets/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';

import TitleCards from '../../componets/Cards/TitleCards';
import Footer from '../../componets/Footer/Footer';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


function Home() {





  const functionPLAY =  () => {
    
  } 


  return (
    <div className={styles.home}>
      <Navbar />

      {/* Hero Section */}
      <div className={styles.hero}>
        <img src={hero_banner} alt="Banner" className={styles.bannerImg} />
        <div className={styles.heroCaption}>
          <img src={hero_title} alt="Hero Title" className={styles.captionImg} />
          <p>
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className={styles.heroBtns}>
            <button onClick={functionPLAY} className={styles.btn}>
              <img src={play_icon} alt="Play" />
              Play
            </button>
            <button className={`${styles.btn} ${styles.darkBtn}`}>
              <img src={info_icon} alt="Info" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Top Section Cards (Popular) */}
      <div className={styles.topCards} style={{ marginLeft: '20px' }}>
        <TitleCards />
      </div>

      {/* Additional Categories */}
      <div className={styles.moreCards}>
        <TitleCards title="Blockbuster Movies" category="top_rated" />
        <TitleCards title="Only on Netflix" category="popular" />
        <TitleCards title="Upcoming" category="upcoming" />
        <TitleCards title="Top Picks for You" category="now_playing" />
      </div>

      <Footer />
    </div>
  );
}

export default Home;







