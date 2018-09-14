import React from 'react';
import LogIn from './LogIn';
import ExistingUser from './ExistingUser';
import LogInControl from './LogInControl';
import Register from './Register';
import Error404 from './Error404';
import { Link } from 'react-router';
import UserProfileData from './UserProfileData';


function Header(){
  return (
    <div className="header-container">
      <div className="content-container">
        <div className="top-nav-menu">
          <Link to='/'>HOME</Link>
          <Link to='/Register'>BLOG</Link>
          <Link to='/Contact'>CONTACT</Link>
        </div>
        <div className="top-right-container">
          <div>
            <Link to='/LogIn'><button className="register">LOGIN</button></Link>
          </div>
          <div>
            <Link to='/Register'><button className="register">REGISTER</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
