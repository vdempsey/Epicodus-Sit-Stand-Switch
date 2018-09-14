import React from 'react';
import PropTypes from 'prop-types';
import LogIn from './LogIn';
import logoType from '../assets/images/logotype.png';
import frameBlue from '../assets/images/frameBlue.png';
import existingUser from '../assets/images/existingUser.jpg';
import plus from '../assets/images/plus.png';
import Header from './Header';
import Menu from './Menu';
import BannerTwo from './BannerTwo';
import { Link } from 'react-router';

function PleaseRegister(props){
  return (
    <div>
    <Header/>
    <BannerTwo bannerText='Activate your 8 to 5' />
    <Menu />
    <div className="register-form-container">
      <div>
        <img src={plus} />
      </div>
      <h1>Sorry, we didn't find you! Please try again!</h1>
    </div>
  </div>
  );
}


export default PleaseRegister;
