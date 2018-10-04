import React from 'react';
import facebookWhite from '../assets/images/facebookWhite.png';
import twitterWhite from '../assets/images/twitterWhite.png';
import { Link } from 'react-router';


function FooterWhite(){

  return (
    <div className="footer-container white-containter">
      <div className="social transparent">
        <Link to='https://www.facebook.com/'><img src={facebookWhite} className="socialIcon"/></Link>
        <Link to='https://twitter.com/'><img src={twitterWhite} className="socialIcon"/></Link>
      </div>
      <div className="address legal white">
        <p class="legal">© 2018 Sit Stand Switch, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default FooterWhite;
