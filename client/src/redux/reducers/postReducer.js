import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from '../constants/postConstants';

const initialState = {
  loading: false,
  createErrors: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { ...state, loading: true };
    case CREATE_POST_SUCCESS:
      return { ...state, loading: false };
    case CREATE_POST_ERROR:
      return { ...state, loading: false, createErrors: action.payload };
    default:
      return state;
  }
};

export { postReducer };
