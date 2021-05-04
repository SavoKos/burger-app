import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  userId: null,
  token: null,
  signupError: null,
  loginError: null,
  redirect: false,
};

const reducer = (
  state = initialState,
  { type, errorType, errorMessage, authData, LSToken, LSUserId }
) => {
  switch (type) {
    case actionTypes.AUTH_START:
      return { ...state, loading: true, signupError: null, loginError: null };
    case actionTypes.AUTH_FAIL:
      return { ...state, loading: false, [errorType]: errorMessage };
    case actionTypes.AUTH_REDIRECT_DISABLE:
      return { ...state, redirect: false };
    case actionTypes.LOAD_LOCAL_STORAGE:
      return { ...state, token: LSToken };
    case actionTypes.LOGOUT:
      return { ...state, userId: null, token: null };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        redirect: true,
        token: authData.idToken,
        loading: false,
        userId: authData.localId,
      };

    default:
      return state;
  }
};

export default reducer;
