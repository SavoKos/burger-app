import axios from 'axios';
import * as actionTypes from './actionTypes';

export const startAuth = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authFail = authType => {
  const error = {
    type: 'loginError',
    message: 'Email or Password is invalid. Try again.',
  };

  if (authType === 'signUp') {
    error.type = 'signupError';
    error.message = 'Try signing up with another email, or try again later';
  }

  return {
    type: actionTypes.AUTH_FAIL,
    errorType: error.type,
    errorMessage: error.message,
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

export const authRedirectDisable = () => {
  return {
    type: actionTypes.AUTH_REDIRECT_DISABLE,
  };
};

export const logoutTimer = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.LOGOUT,
  };
};

export const loadLocalStorage = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    const authData = { localId: userId, idToken: token };
    if (expirationDate > new Date()) {
      dispatch(logoutTimer((expirationDate - new Date()) / 1000));
      dispatch(authSuccess(authData));
    }
  };
};

export const auth = (email, password, authType) => {
  return dispatch => {
    dispatch(startAuth());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    const firebaseApiKey = 'AIzaSyCMm-9pd2jLFdhKS3foaGF3wygPXdiha_Y';

    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${authType}?key=${firebaseApiKey}`,
        authData
      )
      .then(response => {
        const expirationDate = new Date(+new Date() + 3600 * 1000);

        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(logoutTimer(response.data.expiresIn));
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        dispatch(authFail(authType));
      });
  };
};
