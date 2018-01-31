import React from 'react';
import BannerTwo from './BannerTwo';
import RegisterForm from './RegisterForm';
import Header from './Header';
import Menu from './Menu';
import PropTypes from 'prop-types';



function Register(props){
  return (
    <div>
      <Header/>
      <BannerTwo bannerText='Activate your 8 to 5' />
      <Menu />
      <RegisterForm onNewUserCreation={props.handleNewUserFormSubmissionn}/>
    </div>
  );
}

Register.propTypes = {
  onNewUserCreation: PropTypes.func
};


export default Register;
