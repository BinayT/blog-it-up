import axios from 'axios';

import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_TOKEN,
} from '../constants/authConstants';

////////////////////////////////////////// USER REGISTER //////////////////////////////////////////

const userRegister = (info) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  dispatch({ type: REGISTRATION_REQUEST });

  try {
    const { data } = await axios.post('/register', info, config);
    dispatch({ type: REGISTRATION_SUCCESS });

    localStorage.setItem('jwtToken', data.token);

    //We get token before the browser refreshes.
    dispatch({ type: SET_TOKEN, payload: data.token });
  } catch (error) {
    dispatch({ type: REGISTRATION_ERROR, payload: error.response.data.errors });
    console.log(error.response.data.errors);
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////// USER LOGIN //////////////////////////////////////////
const loginUser = (info) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post('/login', info, config);
    dispatch({ type: LOGIN_SUCCESS });

    localStorage.setItem('jwtToken', data.token);

    //We get token before the browser refreshes.
    dispatch({ type: SET_TOKEN, payload: data.token });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.response.data.errors });
    console.log(error.response.data.errors);
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////

export { userRegister, loginUser };
