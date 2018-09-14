import React from 'react';
import PropTypes from 'prop-types';
import LogIn from './LogIn';
import logoType from '../assets/images/logotype.png';
import frameBlue from '../assets/images/frameBlue.png';
import existingUser from '../assets/images/existingUser.jpg';
import MenuUser from './MenuUser';
import { Link } from 'react-router';

function ExistingUser(props) {

  const imgProfile = {
    color: 'blue',
    backgroundImage: `url(${existingUser})`,
    backgroundSize: 'cover',
    height: '170px',
    width: '170px',
    borderRadius: '50%',
    border: '1px solid white'

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
              <p className='user-name'>Welcome <span className="name">{props.name}</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="user-banner">
        <div className="user-information">
          <div className="profile-img-container">
            <div style={imgProfile}></div>
            <img src={frameBlue}/>
          </div>
          <div className="profile-content-container">
            <div>&quot;Mia's motto&quot;</div>
            <div>&#8208; {props.username}</div>
          </div>
        </div>
      </div>
      <MenuUser />
    </div>
  );
}

ExistingUser.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string
};

export default ExistingUser;
