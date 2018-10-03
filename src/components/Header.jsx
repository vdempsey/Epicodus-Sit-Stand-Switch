import React from 'react';
import { Link } from 'react-router';


function Header(){

  return (
    <div className="header-container">
      <div className="content-container">
        <div className="top-nav-menu">
          <Link to='/'>HOME</Link>
          <Link to='/Blog'>BLOG</Link>
          <Link to='/'>CONTACT</Link>
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

export default Header;
