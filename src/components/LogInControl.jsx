import React from 'react';
import PropTypes from 'prop-types';
import UserProfilePage from './UserProfilePage';
import LogInError from './LogInError';
import LogIn from './LogIn';
import LogInForm from './LogInForm';
import existingUser from '../assets/images/existingUser.jpg';
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
    if (this.state.userLog.username == 'Mia' && this.state.userLog.password == 'Mia'){
      currentlyVisibleContent = <UserProfilePage name='Mia' motto='I like to move it move it!' username="MM" url={existingUser} />;
    } else if(!this.state.formVisibleOnPage) {
      currentlyVisibleContent = <LogInForm onUserLogIn={this.handleLogInFormSubmission}/>;
    }
    else {
      currentlyVisibleContent = <LogInError />;
      if(currentlyVisibleContent) {
        this.state.formVisibleOnPage = false;
      }
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

LogInControl.propTypes = {
  onUserLogIn: PropTypes.func,
  onClick: PropTypes.func
};

export default LogInControl;
