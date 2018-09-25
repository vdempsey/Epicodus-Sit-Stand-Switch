import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import LogInForm from './LogInForm';
import LogInControl from './LogInControl';
import logoType from '../assets/images/logotype.png';
import plus from '../assets/images/plus.png';
import Header from './Header';
import Menu from './Menu';
import BannerTwo from './BannerTwo';
import { Link } from 'react-router';


function LogInError(){
  const logInErrorStyle = {
    width: '400px',
    margin: '0px auto',
    textAlign: 'center',
    boxSizing: 'boarder-box',
    color: 'white',
    fontSize: '20'
  };
  const linkStyle = {
    color: 'white'
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
              <p className='user-name'>You can do it <span className="name">Sit-Stand Worrier!</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="register-form-container">
        <div style={logInErrorStyle}>
          <h3>Sorry, we didn't find you! <br />Please <Link to='/LogIn' style={linkStyle}>try again</Link> or <Link to='/Register' style={linkStyle}>register here</Link></h3>
        </div>
      </div>
    </div>
    );
}


export default LogInError;
