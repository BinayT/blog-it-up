import axios from 'axios';

const userRegister = (data) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  dispatch({ type: 'SET_LOADER' });

  try {
    const response = await axios.post('/register', data, config);
    console.log(response);
    dispatch({ type: 'CLOSE_LOADER' });
  } catch (error) {
    dispatch({ type: 'ERROR_LOADER', payload: error.response.data.errors });
    console.log(error.response.data.errors);
  }
};

export { userRegister };
