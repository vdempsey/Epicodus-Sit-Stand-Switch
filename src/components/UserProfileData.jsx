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
import sitStandsm from '../assets/images/sitStandsm2.gif';
import friends2 from '../assets/images/friends2.gif';
import timer from '../assets/images/timer.gif';
import { Link } from 'react-router';

function UserProfileData(props) {

  const imgProfile = {
    height: '170px',
    width: '170px',
    borderRadius: '50%',
    marginTop: '15',
    marginLeft: '3'

  };
  const signOut = {
    fontFamily: 'Fjalla One',
    paddingLeft: '40px',
    color: '#d6de23'
  };

  return (
    <div>
      <div className="header-container">
        <div className="content-container">
          <div>
          <Link to="/"><img className="logoType-sm" src={logoType} /></Link>
          </div>
          <div>
            <div>
              <p className='user-name'>Welcome <span className="name">{props.name}</span>. <Link to='/LogIn' style={signOut}>SIGN OUT</Link></p>
            </div>
          </div>
        </div>
      </div>
      <div className="user-banner">
        <div className="user-information">
          <div className="profile-img-container">
            <img src={require(`../assets/images/${props.url}`)} style={imgProfile}/>
            <img src={frameBlue}/>
          </div>
          <div className="profile-content-container">
            <div>&quot;{props.motto}&quot;</div>
            <div className="user-signature">&#8208; {props.username}</div>
          </div>
        </div>
      </div>
      <MenuUser />
        <div className="how-container">
          <div className="content-how">

            <div className="how-item">
                <h3>Sitting or Standing, <br />Don't forget to switch in:</h3>
                <img src={timer} />
            </div>

            <div className="how-item">
              <div className="show">
                <img src={schedule} className="schedule-img"/>
              </div>
            </div>

            <div className="how-item">
                <h3>My Tribe of <br />23 Sit-Stand Warriors!</h3>
                <img src={friends2} className="schedule-img"/>
            </div>


          </div>
        </div>
    </div>
  );
}

UserProfileData.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  motto: PropTypes.string
};

export default UserProfileData;
