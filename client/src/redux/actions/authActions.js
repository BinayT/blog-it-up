import axios from 'axios';

import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from '../constants/authConstants';

const userRegister = (data) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  dispatch({ type: REGISTRATION_REQUEST });

  try {
    const response = await axios.post('/register', data, config);
    console.log(response);
    dispatch({ type: REGISTRATION_SUCCESS });
  } catch (error) {
    dispatch({ type: REGISTRATION_ERROR, payload: error.response.data.errors });
    console.log(error.response.data.errors);
  }
};

export { userRegister };
