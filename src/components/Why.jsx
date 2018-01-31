import React from 'react';
import BannerTwo from './BannerTwo';
import Menu from './Menu';
import Header from './Header';
import { Link } from 'react-router';


function Why(){
  return (
    <div>
      <Header/>
      <BannerTwo bannerText='Activate your 8 to 5' />
      <Menu />
      <div>
        <h2>Future Headline goes here for Why</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default Why;
