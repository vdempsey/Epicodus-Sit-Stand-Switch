import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import LogIn from './LogIn';
import LogInForm from './LogInForm';


import plus from '../assets/images/plus.png';
import Header from './Header';
import Menu from './Menu';
import BannerTwo from './BannerTwo';
import { Link } from 'react-router';


function LogInError(){
  return (
    <div>
      <Header/>
      <BannerTwo bannerText='Activate your 8 to 5' />
      <Menu />
      <div className="register-form-container">
        <h3>Sorry, we didn't find you! Please <Link to='/LogIn'>try again</Link> or <Link to='/Register'>register here</Link></h3>
      </div>
    </div>
    );
}


export default LogInError;
