import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Menu from './Menu';
import BannerTwo from './BannerTwo';
import { Link } from 'react-router';
import { v4 } from 'uuid';
import UserProfilePage from './UserProfilePage';
import LogInError from './LogInError';
import LogIn from './LogIn';
import LogInForm from './LogInForm';
import ExistingUser from './ExistingUser';
import Register from './Register';
import { withRouter } from 'react-router';


class LogInControl extends React.Component {


  constructor(props) {
  super(props);
  this.state = {
      userLog: {
        username: '',
        password: '',
      },
      formVisibleOnPage: false
  };

  this.handleLogInFormSubmission = this.handleLogInFormSubmission.bind(this);
}

  handleLogInFormSubmission(info) {
    this.setState({formVisibleOnPage: true,
      userLog: {
        username: info.username,
        password: info.password,
        key: 'value'
      }});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.userLog.username == 'Mia'){
      currentlyVisibleContent = <ExistingUser name='Mia' />;
    } else if(!this.state.formVisibleOnPage) {
      currentlyVisibleContent = <LogInForm onUserLogIn={this.handleLogInFormSubmission}/>;;
    }

    else {
      currentlyVisibleContent = <LogInError />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

LogIn.propTypes = {
  onUserLogIn: PropTypes.func
};

export default LogInControl;
