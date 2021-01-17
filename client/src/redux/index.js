import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer, loginReducer } from './reducers/authReducers';

const rootReducers = combineReducers({
  auth: authReducer,
  login: loginReducer,
});

const middlewares = [thunk];

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
