import axios from 'axios';
import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from '../constants/postConstants';

export const createPost = (postData) => async (dispatch) => {
  const token = localStorage.getItem('jwtToken');
  dispatch({ type: CREATE_POST_REQUEST });
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post('/create_post', postData, config);
    dispatch({ type: CREATE_POST_SUCCESS });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: CREATE_POST_ERROR, payload: error.response.data.errors });
  }
};
