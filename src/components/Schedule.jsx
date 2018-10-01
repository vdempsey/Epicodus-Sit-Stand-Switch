import React from 'react';
import PropTypes from 'prop-types';
import logoType from '../assets/images/logotype.png';
import existingUser from '../assets/images/existingUser.jpg';
import frameBlue from '../assets/images/frameBlue.png';
import newProfile from '../assets/images/newProfile.png';
import user1 from '../assets/images/user1.png';
import MenuUser from './MenuUser';
import one from '../assets/images/one.png';
import two from '../assets/images/two.png';
import three from '../assets/images/three.png';
import schedule from '../assets/images/schedule-example.png';
import friends from '../assets/images/friends.png';
import sitStandsm from '../assets/images/sitStandsm2.gif';
import { Link } from 'react-router';

function Schedule() {

  return (
    <div>
      
        <div className="how-container">
          <div className="content-how">

            <div className="how-item">
              <div className="show">
                <img className="number" src={one} />
                <h3>Create your schedule</h3>
                <div className="hide">
                  <img src={schedule} className="schedule-img"/>
                </div>
              </div>
            </div>

            <div className="how-item">
              <div className="show">
                <h3>Create your schedule</h3>
                <div className="hide">
                  <img src={schedule} className="schedule-img"/>
                </div>
              </div>
            </div>

            <div className="how-item">
              <div className="show">
                <img className="number" src={three} />
                <h3>Move throughout your day</h3>
                <div className="hide">
                  <img src={sitStandsm} className="schedule-img"/>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
  );
}


export default Schedule;
