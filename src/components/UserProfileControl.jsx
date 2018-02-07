import React from 'react';
import add from '../assets/images/add.png';
import PropTypes from 'prop-types';
import Header from './Header';
import Menu from './Menu';
import BannerTwo from './BannerTwo';
import { Link } from 'react-router';
import { v4 } from 'uuid';
import UserProfilePage from './UserProfilePage';
import RegisterForm from './RegisterForm';
import { withRouter } from 'react-router'


class UserProfileControl extends React.Component {


  constructor(props) {
  super(props);
  this.state = {
      userInfo: {
        url: 'www',
        name: 'Mia',
        username: 'MamaMia',
        motto: 'I like to move it move it'
      },
    formVisibleOnPage: false
  };
  this.handleNewUserFormSubmission = this.handleNewUserFormSubmission.bind(this);
}

  handleNewUserFormSubmission(info) {
    this.setState({formVisibleOnPage: true,
      userInfo: {
        name: info.name,
        motto: info.motto,
        username: info.username,
        url: info.url,
        key: 'value'
      }});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <UserProfilePage name={this.state.userInfo.name} motto={this.state.userInfo.motto} username={this.state.userInfo.username} url={this.state.userInfo.url}/>;
    } else {
      currentlyVisibleContent = <RegisterForm onNewUserCreation={this.handleNewUserFormSubmission}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

UserProfileControl.propTypes = {
  onNewUserCreation: PropTypes.func
};

export default UserProfileControl;
