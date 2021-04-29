import React, { Component } from 'react';

import './auth.scss';

class Auth extends Component {
  render() {
    return (
      <div>
      <form className="login">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form></div>
    );
  }
}

export default Auth;
