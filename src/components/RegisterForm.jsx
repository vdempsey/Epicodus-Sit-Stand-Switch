import React from 'react';
import plus from '../assets/images/plus.png';
import PropTypes from 'prop-types';
import Header from './Header';
import Menu from './Menu';
import BannerTwo from './BannerTwo';
import { Link } from 'react-router';
import { v4 } from 'uuid';
import { withRouter } from 'react-router'

function RegisterForm(props){
  const registerFormStyle = {
    width: '400px',
    margin: '0px auto',
    textAlign: 'center',
    boxSizing: 'boarder-box'
  };
  const inputFields = {
    height: '40px',
    marginBottom: '15px',
    width: '300px',
    border: '1px solid #b5b5b5',
    textAlign: 'center',
    fontSize: '16px',
    color: '#404040'
  };
  const textAreaStyle = {
    width: '160px',
    padding: '0'
  };
  const register = {
    width: '300px',
    backgroundColor: "#0090AA",
    color: "#fff",
    height: '50px',
    fontSize: '20px'
  };
  const plusStyle = {
    width: '80px',
    marginBottom: '10px'
  }

  let _url = null;
  let _name = null;
  let _username = null;
  let _password = null;
  let _motto = null;

  function handleRegisterFormSubmission(event) {
    event.preventDefault();
    props.onNewUserCreation({name: _name.value, username: _username.value, password: _password.value, motto: _motto.value, url: _url.value, id: v4()});
    _name.value = '';
    _username.value = '';
    _password.value = '';
    _motto.value = '';
    _url.value = '';
  }


  return (
    <div>
    <Header/>
    <BannerTwo bannerText='Activate your 8 to 5' />
    <Menu />
    <div className="register-form-container">
      <form onSubmit={handleRegisterFormSubmission} style={registerFormStyle}>
        <div>
          <img style={plusStyle} src={plus} />
        </div>
        <div>
          <input style={inputFields} id='url' placeholder='url' ref={input => _url = input}/>
        </div>
        <div>
          <input style={inputFields} id='name' placeholder='Name' ref={input => _name = input}/>
        </div>
        <div>
          <input style={inputFields} id='username' placeholder='Username' ref={input => _username = input}/>
        </div>
        <div>
          <input style={inputFields} id='name' placeholder='Password' ref={input => _password = input}/>
        </div>
        <div>
          <input style={inputFields} id='name' placeholder='Your Motto' ref={input => _motto = input}/>
        </div>
        <button type='submit' style={register}>SAVE</button>
      </form>
    </div>
  </div>
  );
}



RegisterForm.propTypes = {
  onNewUserCreation: PropTypes.func
};

export default RegisterForm;
