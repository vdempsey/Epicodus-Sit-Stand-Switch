import React from 'react';
import LogIn from './LogIn';
import Register from './Register';
import How from './How';
import Why from './Why';
import { Link } from 'react-router';
import MenuLink from './MenuLink';

function Menu(){
  return (
    <div className="menu-container-wrap">
      <div className="menu-container">
        <MenuLink to='/Why' className="menu-link">WHY</MenuLink>
        <MenuLink to='/How' className="menu-link">HOW</MenuLink>
        <MenuLink to='/Register' className="menu-link">REGISTER</MenuLink>
      </div>
    </div>
  );
}

export default Menu;
