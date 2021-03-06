import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';
import Login from '../../components/Auth/Login/Login';
import Signup from '../../components/Auth/Signup/Signup';
import Logout from '../../components/Auth/Logout/Logout';
import { Redirect } from 'react-router';

class Auth extends Component {
  state = { isSignupActive: false };

  signupActiveHandler = () => {
    this.setState({ isSignupActive: true });
  };

  loginActiveHandler = () => {
    this.setState({ isSignupActive: false });
  };

  checkErrors = info => {
    const errorMessage = [];

    const emailValidateRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (info.password.length < 7)
      errorMessage.push('Password must be at least 7 characters long!');

    if (!emailValidateRegex.test(String(info.email).toLowerCase()))
      errorMessage.push('Enter Valid Email!');

    return errorMessage;
  };

  authHandler = info => {
    const error = this.checkErrors(info);
    if (error !== []) return error;
  };

  render() {
    if (this.props.loading)
      return (
        <Fragment>
          <Spinner />
          <h1>You are successfully logged in.</h1>
          <h3>Redirecting...</h3>
        </Fragment>
      );

    if (this.props.isRedirecting) return <Redirect to="/" />;

    if (this.props.isAuth) return <Logout />;

    const signupClass = ['signup'];
    const loginClass = ['login'];

    this.state.isSignupActive
      ? loginClass.push('slide-up')
      : signupClass.push('slide-up');

    return (
      <div className="form-structor">
        <Signup
          signupClass={signupClass.join(' ')}
          signupActive={this.signupActiveHandler}
          trySignup={info => this.authHandler(info)}
          backendError={this.props.signupError}
        />
        <Login
          loginClass={loginClass.join(' ')}
          loginActive={this.loginActiveHandler}
          tryLogin={info => this.authHandler(info)}
          backendError={this.props.loginError}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    loginError: state.auth.loginError,
    signupError: state.auth.signupError,
    isAuth: state.auth.token,
    isRedirecting: state.auth.redirect,
  };
};

export default connect(mapStateToProps)(Auth);
