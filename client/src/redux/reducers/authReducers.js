import jwtDecode from 'jwt-decode';

import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  SET_TOKEN,
} from '../constants/authConstants';

const initialState = {
  loading: false,
  registerErrors: [],
  loginErrors: [],
  token: '',
  user: null,
};

const verifyToken = (token) => {
  const decodedToken = jwtDecode(token);
  const expiresIn = new Date(decodedToken.exp * 1000);

  if (new Date() > expiresIn) {
    localStorage.removeItem('jwtToken');
  } else {
    return decodedToken;
  }
};

const token = localStorage.getItem('jwtToken');

if (token) {
  verifyToken(token);
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return { ...state, loading: true };
    case REGISTRATION_SUCCESS:
      return { ...state, loading: false };
    case REGISTRATION_ERROR:
      return { ...state, loading: false, registerErrors: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
