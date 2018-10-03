import React from 'react';
import logoType from '../assets/images/logotype.png';
import { Link } from 'react-router';


function HeaderBlog(){

  return (
    <div className="header-container">
      <div className="content-container">
        <Link to="/"><img className="logoType-sm" src={logoType} /></Link>
        <div className="top-nav-menu">
        </div>
        <div className="top-right-container">
          <div>
            <Link to='/LogIn'><button className="login">LOGIN</button></Link>
          </div>
          <div>
            <Link to='/Register'><button className="register">REGISTER</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBlog;
