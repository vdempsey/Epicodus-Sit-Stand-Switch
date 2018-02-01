import React from 'react';
import add from '../assets/images/add.png';
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
    margin: '20px auto',
    textAlign: 'center',
    boxSizing: 'boarder-box'
  };
  const inputFields = {
    height: '30px',
    marginRight: '10px',
    width: '200px',
    border: '1px solid #b5b5b5',
  };
  const labelStyle = {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: '300',
    textAlign: 'right',
    width: '120px',
    padding: '10px',
    marginBottom: '5px',
    display: 'inline-block'
  };
  const textAreaStyle = {
    width: '160px',
    padding: '0'
  };
  const register = {
    width: '204px',
    backgroundColor: "#0090AA",
    color: "#fff",
    marginLeft: '130px',
    marginTop: '10px'
  }

  let _url = null;
  let _name = null;
  let _username = null;
  let _password = null;
  let _motto = null;

  function handleRegisterFormSubmission(event) {
    event.preventDefault();
    props.onNewUserCreation({url: _url.value, name: _name.value, username: _username.value, password: _password.value, motto: _motto.value, id: v4()});
    _url.value = '';
    _name.value = '';
    _username.value = '';
    _password.value = '';
    _motto.value = '';
  }


  return (
    <div>
    <Header/>
    <BannerTwo bannerText='Activate your 8 to 5' />
    <Menu />
    <div className="register-form-container">
      <div>
        <img className="logoSm" src={add} />
        <p>For best results, upload a square photo</p>
      </div>
      <form onSubmit={handleRegisterFormSubmission} style={registerFormStyle}>
        <div>
          <label htmlFor="url" style={labelStyle}>Profile Pic</label>
          <input style={inputFields} id='url' type="text" ref={input => _url = input}/>
        </div>
        <div>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input style={inputFields} id='name' ref={input => _name = input}/>
        </div>
        <div>
          <label htmlFor="username" style={labelStyle}>User Name</label>
          <input style={inputFields} id='username'ref={input => _username = input}/>
        </div>
        <div>
          <label htmlFor="password" style={labelStyle}>Password</label>
          <input style={inputFields} id='name' ref={input => _password = input}/>
        </div>
        <div>
          <label htmlFor="motto" style={labelStyle}>Your Motto</label>
          <input style={inputFields} id='name' ref={input => _motto = input}/>
        </div>
        <button type='submit' style={register}>REGISTER</button>
      </form>
    </div>
  </div>
  );
}



RegisterForm.propTypes = {
  onNewUserCreation: PropTypes.func
};

export default RegisterForm;
