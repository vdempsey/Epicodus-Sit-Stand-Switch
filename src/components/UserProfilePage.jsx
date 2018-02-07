import React from 'react';
import Header from './Header';
import BannerTwo from './BannerTwo';
import CircularFrame from '../assets/images/CircularFrame.png';
import UserProfileData from './UserProfileData';

function UserProfilePage(props) {
  return(
    <div>
      <UserProfileData
        name={props.name} motto={props.motto} username={props.username}
        url={props.url} />
    </div>
  );
}

export default UserProfilePage;
