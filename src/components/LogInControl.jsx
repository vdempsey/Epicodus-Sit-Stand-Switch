import React from 'react';
import PropTypes from 'prop-types';
import UserProfilePage from './UserProfilePage';
import LogInError from './LogInError';
import LogInForm from './LogInForm';


class LogInControl extends React.Component {


  constructor(props) {
  super(props);
  this.state = {
      userLog: {
        username: '',
        password: '',
      },
      formVisibleOnPage: false,
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
    if (!this.state.formVisibleOnPage) {
      currentlyVisibleContent = <LogInForm onUserLogIn={this.handleLogInFormSubmission}/>;

    } else if (this.state.userLog.username == 'Mia' && this.state.userLog.password == 'Mia'){
      currentlyVisibleContent = <UserProfilePage name='Mia' motto='I like to move it move it!' username="MM" url='existingUser.jpg' />;
      this.state.formVisibleOnPage = false;
      }
    else {
      currentlyVisibleContent = <LogInError />;
      this.state.formVisibleOnPage = false;
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
