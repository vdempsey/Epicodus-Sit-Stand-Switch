import React from 'react';
import banner from '../assets/images/index-logo.gif';

function Banner(props){
  return(
    <div className="banner-container">
      <img src={banner} className="animated-gif"/>
      <p className="main-tagline">{props.bannerText}</p>
    </div>
  );
}

export default Banner;
