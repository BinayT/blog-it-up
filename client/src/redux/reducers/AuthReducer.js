const initialState = {
  loading: false,
  registerErrors: [],
  loginErrors: [],
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADER':
      return { ...state, loading: true };
    case 'CLOSE_LOADER':
      return { ...state, loading: false };
    case 'ERROR_LOADER':
      return { ...state, loading: false, registerErrors: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
