import axios from 'axios';

import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from '../constants/authConstants';

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
  } catch (error) {
    dispatch({ type: REGISTRATION_ERROR, payload: error.response.data.errors });
    console.log(error.response.data.errors);
  }
};

export { userRegister };
