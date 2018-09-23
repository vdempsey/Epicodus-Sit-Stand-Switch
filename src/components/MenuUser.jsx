import React from 'react';
import How from './How';
import Why from './Why';
import { Link } from 'react-router';
import MenuLink from './MenuLink';

function Menu(){
  return (
    <div className="menu-user-container-wrap">
      <div className="menu-container">
        <MenuLink to='/Why' className="menu-link">MY DASHBOARD</MenuLink>
        <MenuLink to='/How' className="menu-link">MY SCHEDULE</MenuLink>
        <MenuLink to='/Register' className="menu-link">MY PEOPLE</MenuLink>
      </div>
    </div>
  );
}

export default Menu;
