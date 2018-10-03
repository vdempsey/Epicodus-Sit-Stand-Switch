import React from 'react';
import MenuLink from './MenuLink';

function Menu(){
  return (
    <div className="menu-user-container-wrap">
      <div className="menu-container">
        <MenuLink to='/' className="menu-link">MY DASHBOARD</MenuLink>
        <MenuLink to='/' className="menu-link">MY SCHEDULE</MenuLink>
        <MenuLink to='/' className="menu-link">MY PEOPLE</MenuLink>
      </div>
    </div>
  );
}

export default Menu;
