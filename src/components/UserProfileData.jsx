import React from 'react';
import PropTypes from 'prop-types';

function UserProfileData(props) {
  return (
    <div>
      <div>My url is {props.url}</div>
      <div>My name is {props.name}</div>
      <div>My username is {props.username}</div>
      <div>My password is {props.password}</div>
      <div>My motto is {props.motto}</div>
    </div>
  );
}

UserProfileData.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  motto: PropTypes.string  
};

export default UserProfileData;
