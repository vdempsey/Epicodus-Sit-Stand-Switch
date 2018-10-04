import React from 'react';
import facebookGrey from '../assets/images/facebookGrey.png';
import twitterGrey from '../assets/images/twitterGrey.png';
import { Link } from 'react-router';


function Footer(){

  return (
    <div className="footer-container">
      <div className="social">
        <Link to='https://www.facebook.com/'><img src={facebookGrey} className="socialIcon"/></Link>
        <Link to='https://twitter.com/'><img src={twitterGrey} className="socialIcon"/></Link>
      </div>
      <div className="address legal">
        <p class="legal">© 2018 Sit Stand Switch, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
