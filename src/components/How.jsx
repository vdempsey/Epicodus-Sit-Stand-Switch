import React from 'react';
import BannerTwo from './BannerTwo';
import Menu from './Menu';
import Header from './Header';
import one from '../assets/images/one.png';
import two from '../assets/images/two.png';
import three from '../assets/images/three.png';
import schedule from '../assets/images/schedule-example.png';
import friends from '../assets/images/friends.png';
import sitStandsm from '../assets/images/sitStandsm2.gif';
import { Link } from 'react-router';


function How(){
  return (
    <div>
      <Header/>
      <BannerTwo bannerText='Activate your 8 to 5' />
      <Menu />
      <div className="how-container">
        <div className="content-how">
          <div className="how-item">
            <img className="number" src={one} />
            <h3>Create your schedule</h3>
            <img src={schedule} className="schedule-img"/>
          </div>
          <div className="how-item">
            <img className="number" src={two} />
            <h3>Team up with your friends</h3>
            <img src={friends} className="schedule-img"/>
          </div>
          <div className="how-item">
            <img className="number" src={three} />
            <h3>Sit Stand Switch</h3>
            <img src={sitStandsm} className="schedule-img"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
