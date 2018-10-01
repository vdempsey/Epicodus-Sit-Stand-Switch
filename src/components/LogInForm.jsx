import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Menu from './Menu';
import BannerTwo from './BannerTwo';
import logoType from '../assets/images/logotype.png';
import smile from '../assets/images/smile.gif';
import { Link } from 'react-router';
import { v4 } from 'uuid';


 function LogInForm(props){
   const logInFormStyle = {
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
   const logInButton = {
     width: '300px',
     backgroundColor: '#d6de23',
     color: "#404040",
     height: '50px',
     fontSize: '20px'
   };
   const smileStyle = {
     width: '80px',
     marginBottom: '10px'
   }
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
      <div className="header-container">
        <div className="content-container">
          <div>
          <Link to="/"><img className="logoType-sm" src={logoType} /></Link>
          </div>
          <div>
            <div>
              <p className='user-name'>Welcome back <span className="name">Sit-Stand Warrior!</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="log-in-form-container">
        <form onSubmit={handleLogInFormSubmission} style={logInFormStyle}>
          <div>
            <img style={smileStyle} src={smile} />
          </div>
          <input style={inputFields} id='username' placeholder='Username' ref={input => _username = input}/>
          <input style={inputFields} id='password' placeholder='Password' ref={input => _password = input}/>
          <button type='submit' style={logInButton}>LOGIN</button>
        </form>
      </div>
    </div>
  );
}

LogInForm.propTypes = {
  onUserLogIn: PropTypes.func
};


export default LogInForm;
