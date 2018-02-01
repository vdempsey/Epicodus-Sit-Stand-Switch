import React from 'react';
import PropTypes from 'prop-types';
import LogIn from './LogIn';
import logoType from '../assets/images/logotype.png';
import frameBlue from '../assets/images/frameBlue.png';
import newProfile from '../assets/images/newProfile.png';
import { Link } from 'react-router';

function UserProfileData(props) {
  const imgProfile = {
    color: 'blue',
    backgroundImage: 'url(' + newProfile + ')',
    backgroundSize: 'cover',
    height: '170px',
    width: '170px',
    backgroungColor: 'yellow',
    borderRadius: '50%',
    border: '1px solid red'

  };

  return (
    <div>
      <div className="header-container">
        <div className="content-container">
          <div>
          <img className="logoType-sm" src={logoType} />
          </div>
          <div>
            <div>
              <p className='user-name'>Welcome {props.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div>My name is {props.name}</div>
      <div>My username is {props.username}</div>
      <div>My password is {props.password}</div>
      <div className="profile-img-container">
        <div style={imgProfile}></div>
        <img src={frameBlue}/>
      </div>
      <div>My motto is {props.motto}</div>
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
