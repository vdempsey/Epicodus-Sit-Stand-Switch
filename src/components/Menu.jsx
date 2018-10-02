import React from 'react';
import MenuLink from './MenuLink';

function Menu(){
  return (
    <div className="menu-container-wrap">
      <div className="menu-container">
        <MenuLink to='/Why' className="menu-link">WHY</MenuLink>
        <MenuLink to='/How' className="menu-link">HOW</MenuLink>
        <MenuLink to='/Register' className="menu-link">JOIN</MenuLink>
      </div>
    </div>
  );
}

export default Menu;
