import React from 'react';
import PropTypes from 'prop-types';
import LogInControl from './LogIn';
import ExistingUser from './ExistingUser';
import Header from './Header';
import Menu from './Menu';
import BannerTwo from './BannerTwo';
import { Link } from 'react-router';
import { v4 } from 'uuid';


 function LogInForm(props){
  let _username = null;
  let _password = null;

  function handleLogInFormSubmission(event) {
    event.preventDefault();
    props.onUserLogIn({username: _username.value, password: _password.value, id: v4()});
    _username.value = '';
    _password.value = '';
  }

  return (
    <div>
    <Header/>
    <BannerTwo bannerText='Activate your 8 to 5' />
    <Menu />
    <div className="register-form-container">
    <form onSubmit={handleLogInFormSubmission}>
      <input className='input-top' id='username' placeholder='Username' ref={input => _username = input}/>
      <input className='input-top' id='password' placeholder='Password' ref={input => _password = input}/>
      <button type='submit'>LOGIN</button>
    </form>
  </div>
</div>

  );
}

LogInForm.propTypes = {
  onUserLogIn: PropTypes.func
};


export default LogInForm;
