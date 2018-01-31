import React from 'react';
import logoSm from '../assets/images/sit-stand-icon.png';
import logoType from '../assets/images/logotype.png';

function BannerTwo(props){
  return(
    <div>
      <div className="banner-two-container">
        <div>
          <img className="logoSm" src={logoSm} />
        </div>
        <div>
          <img className="logoType" src={logoType} />
          <p className="tagline">{props.bannerText}</p>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
