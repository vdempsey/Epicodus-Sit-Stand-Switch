import React from 'react';

function LogIn(){
  return (
    <form>
      <input className='input-top' type="text" placeholder="Enter your user name"></input>
      <input className='input-top' type="text" placeholder="Enter your password"></input>
      <button>LOGIN</button>
    </form>
  );
}

export default LogIn;
