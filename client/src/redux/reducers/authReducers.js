import jwtDecode from 'jwt-decode';

import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_TOKEN,
  LOGOUT,
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
  const { user } = verifyToken(token);
  initialState.user = user;
  initialState.token = token;
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return { ...state, loading: true };
    case REGISTRATION_SUCCESS:
      return { ...state, loading: false };
    case REGISTRATION_ERROR:
      return { ...state, loading: false, registerErrors: action.payload };
    case SET_TOKEN:
      const decoded = verifyToken(action.payload);
      const { user } = decoded;
      return { ...state, token: action.payload, user };
    case LOGOUT:
      return { ...state, token: '', user: null };
    default:
      return state;
  }
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false };
    case LOGIN_ERROR:
      return { ...state, loading: false, loginErrors: action.payload };
    case SET_TOKEN:
      const decoded = verifyToken(action.payload);
      const { user } = decoded;
      return { ...state, token: action.payload, user };
    default:
      return state;
  }
};

export { AuthReducer, loginReducer };
