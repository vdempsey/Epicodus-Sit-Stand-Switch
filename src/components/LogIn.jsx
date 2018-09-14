import React from 'react';
import BannerTwo from './BannerTwo';
import RegisterForm from './RegisterForm';
import Header from './Header';
import Menu from './Menu';
import LogInForm from './LogInForm';
import PropTypes from 'prop-types';



function LogIn(props){
  return (
    <div>
      <Header/>
      <BannerTwo bannerText='Activate your 8 to 5' />
      <Menu />
      <LogInForm onUserLogIn={props.handleLogInFormSubmission}/>
    </div>
  );
}

LogIn.propTypes = {
  onUserLogIn: PropTypes.func
};


export default LogIn;
