import React from 'react';
import LogIn from './LogIn';
import Register from './Register';
import Error404 from './Error404';
import { Link } from 'react-router';


function Header(){
  return (
    <div className="header-container">
      <div className="content-container">
        <div>
          <Link to='/'>HOME</Link>
          <Link to='/Register'>BLOG</Link>
          <Link to='/Contact'>CONTACT</Link>
        </div>
        <div className="top-right-container">
          <Link to='/'><LogIn /></Link>
          <div>
            <Link to='/Register'><button className="nav-register">REGISTER</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
